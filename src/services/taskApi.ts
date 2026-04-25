import type { Task } from "@/mock";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const TaskApi = createApi({
  reducerPath: "taskapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000", prepareHeaders:(headers, { getState })=>{
    const token = ''
  } }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task, void>({
      query: () => ({
        url: "/api/tasks",
      }),
    }),
  }),
});
