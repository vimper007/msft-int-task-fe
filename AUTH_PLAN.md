# Auth + Data Layer Hardening Plan

## Summary

Keep the project as a practice app with a deliberate mix of tools, but put clear boundaries around them:

- Redux slice owns client auth/session state only.
- localStorage persists the auth session across refresh.
- Axios/fetch auth services may stay mixed for practice, but both should return the same normalized response shape to components.
- RTK Query should own task server state, caching, loading, and task API headers.

## Current Findings

- `login.tsx` has unused imports/state, never resets `loading`, does not show `error`, and does not navigate after success.
- `fetch` login does not check `res.ok`, so failed login can return JSON and then crash when reading `res.data.user`.
- `signup.tsx` still has debug-only `store.getState()`, action logs, Redux selector logs, and direct `store` import.
- `signup()` returns an Axios response object, while `login()` returns raw JSON. Components must remember different response shapes.
- `authSlice.ts` has an untyped reducer payload; `setUser` should use a typed `PayloadAction`.
- `AuthState` currently mixes nullable Redux state and successful session payload shape.
- `useAuthBootstrap` is directionally correct, but needs invalid JSON handling and localStorage access centralized.
- `taskApi.ts` is incomplete: not registered in `store`, does not return headers, does not read token, and likely has wrong response typing.
- `store.ts` lacks pre-typed `useAppDispatch` and `useAppSelector` hooks.
- The current build fails on unused login/task API/App variables.

## Key Changes

- Define clear auth contracts in `auth.type.ts`:
  - `LoginPayload`
  - `SignupPayload`
  - `AuthUser`
  - `AuthSession` as `{ user: AuthUser; token: string }`
  - `AuthState` as `{ user: AuthUser | null; token: string | null }`
  - `ApiSuccess<T>` and `ApiErrorResponse`
  - `AuthResponse = ApiSuccess<AuthSession>`
- Refactor `authSlice`:
  - Use a concrete `initialState`, no `as Auth`.
  - Type `setUser` as `PayloadAction<AuthSession>`.
  - Keep reducers pure: no localStorage calls inside reducers.
- Add an `authStorage` helper:
  - `getStoredAuth(): AuthSession | null`
  - `setStoredAuth(session: AuthSession): void`
  - `clearStoredAuth(): void`
  - If stored JSON is invalid or missing token/user, clear it and return `null`.
- Normalize auth API services:
  - `signup(payload): Promise<AuthResponse>`
  - `login(payload): Promise<AuthResponse>`
  - Keep Axios for signup and fetch for login if desired, but hide that difference inside `auth.api.ts`.
  - Fetch login must check `res.ok`; failed responses should use a consistent error path.
- Clean login/signup pages:
  - Build one `AuthSession` from the normalized auth response.
  - On success: clear old auth, save new auth, dispatch `setUser(session)`, navigate to `/task`.
  - On failure: show a user-facing error, not only `console.log`.
  - Disable submit while loading.
  - Remove debug logs and direct `store` import.
- Keep `useAuthBootstrap` global in `AppRouter`:
  - Read localStorage once through `authStorage`.
  - If session exists, dispatch `setUser(session)`.
  - Render routes only after bootstrap completes.
- Keep `ProtectedRoute` simple:
  - Read Redux only.
  - If token exists, render `<Outlet />`.
  - If missing, `<Navigate to="/login" replace />`.
  - Later improvement: preserve attempted route with `location.state.from`.
- Make RTK Query the task API boundary:
  - Register `TaskApi.reducer` and `TaskApi.middleware` in `store.ts`.
  - `prepareHeaders` reads `state.auth.token` and sets `Authorization: Bearer <token>`.
  - Use RTK Query for tasks only: list/create/update/delete tasks.
  - Export generated task hooks and stop mixing task fetches elsewhere.

## Test Plan

- `npm run build` should pass with no unused variables.
- Login success:
  - API returns token/user.
  - Redux state becomes authenticated.
  - localStorage key `auth` is written.
  - User navigates to `/task`.
- Login failure:
  - Invalid credentials show an error message.
  - Redux state remains unauthenticated.
  - localStorage is not overwritten with bad data.
- Signup success:
  - Same session flow as login.
  - `confirmPassword` is not sent to backend.
- Refresh behavior:
  - Refresh `/task` with valid localStorage auth allows access.
  - Refresh `/task` with no auth redirects to `/login`.
  - Corrupt localStorage auth is cleared and redirects to `/login`.
- Logout behavior:
  - Clears Redux state.
  - Clears localStorage.
  - Navigates to `/login`.
- Task API:
  - Requests include `Authorization` header.
  - Without token, protected backend calls fail cleanly.
  - RTK Query hooks expose loading/error/data states correctly.

## Assumptions and References

- The project should keep a practice mix of Axios, fetch, Redux, and RTK Query, but with clear boundaries.
- Auth API calls can stay service-based for now instead of moving login/signup into RTK Query mutations.
- localStorage will store the full `AuthSession` for this project. A production-grade version would store only the token and call `/api/auth/me` during bootstrap.
- References:
  - Redux Style Guide: https://redux.js.org/style-guide/
  - RTK Query Overview: https://redux-toolkit.js.org/rtk-query/overview
  - RTK Query Queries: https://redux-toolkit.js.org/rtk-query/usage/queries
  - React Redux TypeScript hooks: https://react-redux.js.org/using-react-redux/usage-with-typescript
  - Axios response schema: https://axios-http.com/docs/res_schema
  - Axios error handling: https://axios-http.com/docs/handling_errors
