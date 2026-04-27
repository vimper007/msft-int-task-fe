# Task Manager Frontend

React, TypeScript, Vite, Redux Toolkit, RTK Query, Axios, and React Router practice app for auth-protected task management.

## Current Architecture

- Auth API calls live in `src/services/axios/auth.api.ts`.
- Shared auth contracts live in `src/types/auth.types.ts`.
- Auth session persistence lives in `src/helper/auth-storage.ts`.
- Redux auth state lives in `src/features/auth/authSlice.ts`.
- Task server state is handled with RTK Query through `useGetTasksQuery`.
- The task API should settle under `src/features/tasks/tasks.api.ts` as the project grows.

## Auth Contract

The current shared auth types are:

```ts
export type SignupRequest = {
  name: string;
  email: string;
  password: string;
};

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export type AuthSession = {
  token: string;
  user: AuthUser;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  data: AuthSession;
};
```

`AuthUser` is only identity/profile data. The token belongs to `AuthSession`.

## Scripts

```bash
npm install
npm run dev
npm run build
```

The backend is expected at `http://localhost:4000`.
