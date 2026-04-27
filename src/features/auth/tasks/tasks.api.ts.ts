import type { RootState } from "@/app/store";
import type { Task } from "@/mock";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const taskapi = createApi({
  reducerPath: "taskapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000", 
    prepareHeaders:(headers, { getState })=>{
      const token = (getState() as RootState).auth.token
      if(token) headers.set('Authorization',`Bearer ${token}`)
  } }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query: () => ({
        url: "/api/tasks",
      }),
    }),
  }),
});

export const {useGetTasksQuery} = taskapi