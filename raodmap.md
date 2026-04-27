# Task Manager Frontend Roadmap

## User Flows

- Sign up.
- Log in.
- Persist the current `AuthSession` to localStorage.
- Bootstrap auth from localStorage on refresh.
- Protect task routes with `ProtectedRoute`.
- View tasks.
- Create task.
- Edit task.
- Delete task.
- Filter, search, and sort tasks.

## Screens

- Login page.
- Signup page.
- Tasks page.
- Task details page.
- Not found page.

## Component Boundaries

- `AuthForm`
- `ProtectedRoute`
- `PageLayout`
- `TaskTable`
- `FormComponent`
- `ModalComponent`
- `DeleteConfirmModal`
- `StatusBadge`
- `FilterBar`
- `SearchInput`

## State Boundaries

- Server state: tasks from RTK Query, starting with `useGetTasksQuery`.
- Auth/session state: Redux auth slice plus persisted `AuthSession`.
- Local UI state: modal open/close, selected edit task, delete candidate, filter values, search input, sort order.
- Form state: login, signup, create task, and edit task forms.

## Auth Types

- `SignupRequest`: signup API request body.
- `LoginRequest`: login API request body.
- `AuthUser`: authenticated user profile data.
- `AuthSession`: `{ token: string; user: AuthUser }`.
- `AuthResponse`: API response containing `AuthSession`.
- `LoginResponse`: alias of `AuthResponse`.
- `SignupResponse`: alias of `AuthResponse`.

`AuthUser` should stay user-only. Do not add `token` to `AuthUser`; the token belongs to `AuthSession`.

## Current Auth Flow

Login:

1. User submits `AuthForm` in login mode.
2. `login(request)` calls the backend.
3. The page builds an `AuthSession` from `response.data`.
4. `setUser(session)` updates Redux.
5. `authStorage.set(session)` writes localStorage.
6. User navigates to `/task`.

Signup:

1. User submits `AuthForm` in signup mode.
2. `signup(request)` sends a `SignupRequest`.
3. The page builds an `AuthSession` from `response.data.data`.
4. `setUser(session)` updates Redux.
5. `authStorage.set(session)` writes localStorage.
6. User navigates to `/task`.

Bootstrap:

1. `useAuthBootstrap` reads `authStorage.get()`.
2. If an `AuthSession` exists, dispatch `setUser(session)`.
3. Routes render after bootstrap completes.

## Task API Direction

- Keep task server state in RTK Query.
- Current generated hook: `useGetTasksQuery`.
- Current endpoint: `GET /api/tasks`.
- Current API variable: `taskapi`.
- Preferred long-term variable: `tasksApi`.
- Preferred long-term file path: `src/features/tasks/tasks.api.ts`.

Next task API steps:

1. Rename `taskapi` to `tasksApi`.
2. Move the task API out of `features/auth/tasks`.
3. Add mutations for create, update, and delete.
4. Add cache invalidation with RTK Query tags.
5. Replace mocked task state in `tasks.tsx` with RTK Query data once CRUD endpoints are ready.
