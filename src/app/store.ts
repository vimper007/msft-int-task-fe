import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { taskapi } from "@/features/tasks/tasks.api";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    [taskapi.reducerPath]: taskapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskapi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
