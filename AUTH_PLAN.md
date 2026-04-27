# Auth + Data Layer Notes

## Summary

Keep the project as a practice app with a deliberate mix of tools, but keep the boundaries explicit:

- Redux owns client auth/session state.
- `localStorage` persists the current `AuthSession` across refresh.
- Axios/fetch auth services can stay mixed for practice, but components should receive the same normalized auth response shape.
- RTK Query should own task server state, caching, loading, and task API headers.

## Current Findings

- Auth types now live in `src/types/auth.types.ts`.
- `SignupPayload` has been replaced by `SignupRequest`.
- `AuthState` has been removed from the shared type file. The reusable auth data shape is now `AuthSession`.
- `AuthSession` is `{ token: string; user: AuthUser }`.
- `authStorage` reads and writes `AuthSession` under the `auth` localStorage key.
- `login.tsx` and `signup.tsx` both build an `AuthSession`, dispatch `setUser(session)`, persist it, and navigate to `/task`.
- `authSlice.ts` still keeps a flattened Redux shape: `id`, `name`, `email`, `createdAt`, and `token`.
- `authSlice.ts` still has an untyped reducer payload; `setUser` should use `PayloadAction<AuthSession>`.
- `signup()` returns an Axios response object, while `login()` returns raw JSON. Components still handle different response nesting.
- RTK Query task API is registered in `store.ts` and exports `useGetTasksQuery`.
- The task API currently lives under `src/features/auth/tasks/tasks.api.ts.ts`. The long-term target should be `src/features/tasks/tasks.api.ts`.
- `store.ts` lacks pre-typed `useAppDispatch` and `useAppSelector` hooks.

## Key Changes

- Define clear auth contracts in `src/types/auth.types.ts`:
  - `LoginRequest`
  - `SignupRequest`
  - `AuthUser`
  - `AuthSession` as `{ token: string; user: AuthUser }`
  - `AuthResponse` as `{ success: boolean; message: string; data: AuthSession }`
  - `LoginResponse = AuthResponse`
  - `SignupResponse = AuthResponse`
- Refactor `authSlice`:
  - Use a concrete `AuthSliceState`, no local-only ambiguous `Auth` name.
  - Type `setUser` as `PayloadAction<AuthSession>`.
  - Map `session.user` fields into the current flattened state, or change the slice to store `session: AuthSession | null`.
  - Keep reducers pure: no localStorage calls inside reducers.
- Use the `authStorage` helper:
  - `authStorage.get(): AuthSession | null`
  - `authStorage.set(session: AuthSession): void`
  - `authStorage.remove(): void`
  - If stored JSON is invalid or missing token/user, clear it and return `null`.
- Normalize auth API services:
  - `signup(request: SignupRequest): Promise<AuthResponse>`
  - `login(request: LoginRequest): Promise<AuthResponse>`
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
  - Register `taskapi.reducer` and `taskapi.middleware` in `store.ts`.
  - `prepareHeaders` reads `state.auth.token` and sets `Authorization: Bearer <token>`.
  - Use RTK Query for tasks only: list/create/update/delete tasks.
  - Export generated task hooks and stop mixing task fetches elsewhere.
  - Rename `taskapi` to `tasksApi` when the file is moved to `src/features/tasks/tasks.api.ts`.

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
  - `useGetTasksQuery` uses `/api/tasks`.

## Assumptions and References

- The project should keep a practice mix of Axios, fetch, Redux, and RTK Query, but with clear boundaries.
- Auth API calls can stay service-based for now instead of moving login/signup into RTK Query mutations.
- localStorage will store the full `AuthSession` for this project. A production-grade version would store only the token and call `/api/auth/me` during bootstrap.
- `AuthUser` should not include `token`; `token` belongs to `AuthSession`.
- References:
  - Redux Style Guide: https://redux.js.org/style-guide/
  - RTK Query Overview: https://redux-toolkit.js.org/rtk-query/overview
  - RTK Query Queries: https://redux-toolkit.js.org/rtk-query/usage/queries
  - React Redux TypeScript hooks: https://react-redux.js.org/using-react-redux/usage-with-typescript
  - Axios response schema: https://axios-http.com/docs/res_schema
  - Axios error handling: https://axios-http.com/docs/handling_errors
