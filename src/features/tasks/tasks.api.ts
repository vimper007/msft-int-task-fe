import type { RootState } from "@/app/store";
import type {
  ApiResponse,
  TaskApiResponse,
  UserApiResponse,
} from "@/types/api.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Task } from "./tasks.types";
export const taskapi = createApi({
  reducerPath: "taskapi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      queryFn: async (_args, _api, _opts, baseQuery) => {
        const taskResults = await baseQuery({
          url: "/api/tasks",
        });

        if (taskResults.error) return { error: taskResults.error };

        const taskResposne = taskResults.data as ApiResponse<TaskApiResponse[]>;
        const userIds = [
          ...new Set(taskResposne.data.map((task) => task.userId)),
        ];

        const userResults = await Promise.all(
          userIds.map((userId) => baseQuery(`/api/users/${userId}`)),
        );
        const userResponse = userResults;
        console.log("userResults...", userResults);
        console.log('userResults2.....', ...userResults.map(user=>user.data.data.id))

        const aggregatedTask: Task[] = taskResposne.data.map(
          (task: TaskApiResponse) => ({
            id: task.id,
            title: task.title,
            description: task.description,
            status: task.status,
            priority: task.priority,
            dueDate: task.dueDate,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
            tags: [],
            assignee: {
              id: userResults.find(user=>user.data.data.id === task.userId)?.data.data.id,
              name: userResults.find(user=>user.data.data.id === task.userId)?.data.data.name,
              email: userResults.find(user=>user.data.data.id === task.userId).data.data.email,
              createdAt: userResults.find(user=>user.data.data.id === task.userId).data.data.createdAt,
            }
          }),
        );
        console.log("aggregatedTask",aggregatedTask)
        return {data: aggregatedTask}
      },
    }),
  }),
});

export const { useGetTasksQuery } = taskapi;































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