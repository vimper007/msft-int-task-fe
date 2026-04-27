import type { RootState } from "@/app/store";
import type { ApiResponse } from "@/types/api.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Task } from "./tasks.types";
export const taskapi = createApi({
  reducerPath: "taskapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000", 
    prepareHeaders:(headers, { getState })=>{
      const token = (getState() as RootState).auth.token
      if(token) headers.set('Authorization',`Bearer ${token}`)
  } }),
  endpoints: (builder) => ({
    getTasks: builder.query<ApiResponse<Task[]>, void>({
      query: () => ({
        url: "/api/tasks",
      }),
      transformResponse: (response: ApiResponse<Task[]>) => response
    }),
  }),
});

export const {useGetTasksQuery} = taskapi