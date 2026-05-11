import type { RootState } from "@/app/store";
import type {
  ApiResponse,
  TaskApiResponse,
  UserApiResponse,
} from "@/types/api.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetTasksParams, Task } from "./tasks.types";
export const taskapi = createApi({
  reducerPath: "taskapi",
  tagTypes: ["Tasks"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], GetTasksParams>({
      providesTags: ["Tasks"],
      queryFn: async (_args, _api, _opts, baseQuery) => {
        const taskResults = await baseQuery({
          url: "/api/tasks",
          params: _args,
        });

        if (taskResults.error) return { error: taskResults.error };

        const taskResposne = taskResults.data as ApiResponse<TaskApiResponse[]>;
        const userIds = [
          ...new Set(taskResposne.data.map((task) => task.userId)),
        ];

        const userResults = (await Promise.all(
          userIds.map((userId) => baseQuery(`/api/users/${userId}`)),
        )) as { data: ApiResponse<UserApiResponse> }[];
        console.log("userResults...", userResults);
        console.log(
          "userResults2.....",
          ...userResults.map((user) => user.data.data.id),
        );

        const aggregatedTask: Task[] = taskResposne.data.map(
          (task: TaskApiResponse) => ({
            id: task.id,
            title: task.title,
            description: task.description ?? "",
            status: task.status,
            priority: task.priority,
            dueDate: task.dueDate ?? "",
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
            tags: [],
            assignee: (() => {
              const user = userResults.find(
                (u) => u.data.data.id === task.userId,
              );
              return {
                id: user?.data.data.id ?? "",
                name: user?.data.data.name ?? "",
                email: user?.data.data.email ?? "",
                createdAt: user?.data.data.createdAt ?? "",
              };
            })(),
          }),
        );
        console.log("aggregatedTask", aggregatedTask);
        return { data: aggregatedTask };
      },
    }),
    editTasks: builder.mutation<
      ApiResponse<TaskApiResponse>,
      { id: string; body: Partial<Task> }
    >({
      query: ({ id, body }) => ({
        url: `/api/tasks/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTasks: builder.mutation<void, string>({
      query: (id) => ({
        url: `/api/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const { useGetTasksQuery, useEditTasksMutation, useDeleteTasksMutation } = taskapi;

// async queryFn(_arg, _api, _opts, baseQuery) {
//   // Step 1 — first fetch
//   const tasksResult = await baseQuery("/api/tasks")
//   if (tasksResult.error) return { error: tasksResult.error }

//   // Step 2 — use the result to drive a second fetch
//   const tasks = tasksResult.data.data  // unwrap ApiResponse
//   const userId = tasks[0].userId

//   const userResult = await baseQuery(`/api/users/${userId}`)
//   if (userResult.error) return { error: userResult.error }

//   const user = userResult.data.data  // unwrap ApiResponse

//   // Step 3 — combine and return
//   return {
//     data: tasks.map(task => ({ ...task, assignee: user }))
//   }
// }
