export type TaskStatus = "todo" | "in_progress" | "done";
export type TaskPriority = "low" | "medium" | "high";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  assignee: User;
}

export const mockUser: User = {
  id: "user_1",
  name: "V P",
  email: "vimper007@gmail.com",
  avatarUrl: "https://i.pravatar.cc/100?img=12",
};

export const mockTasks: Task[] = [
  {
    id: "task_1",
    title: "Build login page UI",
    description:
      "Create the login screen with email and password fields, validation messages, and submit button.",
    status: "todo",
    priority: "high",
    dueDate: "2026-04-24T18:00:00.000Z",
    createdAt: "2026-04-22T09:00:00.000Z",
    updatedAt: "2026-04-22T09:00:00.000Z",
    tags: ["auth", "frontend"],
    assignee: mockUser,
  },
  {
    id: "task_2",
    title: "Implement signup form",
    description:
      "Add full signup flow UI with name, email, password, confirm password, and client-side validation.",
    status: "in_progress",
    priority: "high",
    dueDate: "2026-04-24T20:00:00.000Z",
    createdAt: "2026-04-22T10:15:00.000Z",
    updatedAt: "2026-04-23T08:30:00.000Z",
    tags: ["auth", "forms", "typescript"],
    assignee: mockUser,
  },
  {
    id: "task_3",
    title: "Create tasks list page",
    description:
      "Render all tasks in a responsive list with title, priority, status, due date, and actions.",
    status: "done",
    priority: "high",
    dueDate: "2026-04-23T12:00:00.000Z",
    createdAt: "2026-04-21T14:00:00.000Z",
    updatedAt: "2026-04-23T11:45:00.000Z",
    tags: ["tasks", "ui"],
    assignee: mockUser,
  },
  {
    id: "task_4",
    title: "Add create task modal",
    description:
      "Build a reusable task form component for creating new tasks from a modal.",
    status: "todo",
    priority: "medium",
    dueDate: "2026-04-25T10:30:00.000Z",
    createdAt: "2026-04-22T16:20:00.000Z",
    updatedAt: "2026-04-22T16:20:00.000Z",
    tags: ["tasks", "forms"],
    assignee: mockUser,
  },
  {
    id: "task_5",
    title: "Support editing existing task",
    description:
      "Pre-fill the task form and update task details such as title, description, priority, and due date.",
    status: "in_progress",
    priority: "medium",
    dueDate: "2026-04-25T14:00:00.000Z",
    createdAt: "2026-04-22T17:00:00.000Z",
    updatedAt: "2026-04-23T09:15:00.000Z",
    tags: ["tasks", "crud"],
    assignee: mockUser,
  },
  {
    id: "task_6",
    title: "Add task status filter",
    description:
      "Allow users to filter tasks by todo, in progress, or done.",
    status: "todo",
    priority: "low",
    dueDate: "2026-04-26T11:00:00.000Z",
    createdAt: "2026-04-23T07:45:00.000Z",
    updatedAt: "2026-04-23T07:45:00.000Z",
    tags: ["filtering", "state"],
    assignee: mockUser,
  },
  {
    id: "task_7",
    title: "Add search by task title",
    description:
      "Implement a search input that filters tasks by matching title text.",
    status: "done",
    priority: "medium",
    dueDate: "2026-04-23T16:00:00.000Z",
    createdAt: "2026-04-21T11:30:00.000Z",
    updatedAt: "2026-04-23T15:50:00.000Z",
    tags: ["search", "state"],
    assignee: mockUser,
  },
  {
    id: "task_8",
    title: "Add sort dropdown",
    description:
      "Let users sort tasks by due date, created date, or priority.",
    status: "todo",
    priority: "low",
    dueDate: "2026-04-26T15:00:00.000Z",
    createdAt: "2026-04-23T09:10:00.000Z",
    updatedAt: "2026-04-23T09:10:00.000Z",
    tags: ["sorting", "ui"],
    assignee: mockUser,
  },
  {
    id: "task_9",
    title: "Show loading and empty states",
    description:
      "Create reusable empty and loading UI for task list fetch states.",
    status: "in_progress",
    priority: "medium",
    dueDate: "2026-04-24T17:00:00.000Z",
    createdAt: "2026-04-22T13:40:00.000Z",
    updatedAt: "2026-04-23T10:05:00.000Z",
    tags: ["ux", "states"],
    assignee: mockUser,
  },
  {
    id: "task_10",
    title: "Wire frontend to backend API",
    description:
      "Replace mocked task data with real API integration for listing and creating tasks.",
    status: "todo",
    priority: "high",
    dueDate: "2026-04-26T18:30:00.000Z",
    createdAt: "2026-04-23T10:20:00.000Z",
    updatedAt: "2026-04-23T10:20:00.000Z",
    tags: ["api", "integration"],
    assignee: mockUser,
  },
];





// {
//     "success": true,
//     "message": "Tasks fetched",
//     "data": [
//         {
//             "id": "cmoagmnzy0001w784r7zvcfh6",
//             "title": "Prepare interview notes",
//             "description": "Review React hooks and TypeScript utility types.",
//             "status": "todo",
//             "priority": "high",
//             "dueDate": "2026-04-24T19:42:59.324Z",
//             "createdAt": "2026-04-22T19:42:59.327Z",
//             "updatedAt": "2026-04-22T19:42:59.327Z",
//             "userId": "cmoagmnzo0000w784ftowp8y2"
//         },
//         {
//             "id": "cmoagmnzy0002w784xph65wpb",
//             "title": "Build portfolio task app",
//             "description": "Implement authentication and task CRUD UI.",
//             "status": "in_progress",
//             "priority": "medium",
//             "dueDate": "2026-04-26T19:42:59.324Z",
//             "createdAt": "2026-04-22T19:42:59.327Z",
//             "updatedAt": "2026-04-22T19:42:59.327Z",
//             "userId": "cmoagmnzo0000w784ftowp8y2"
//         },
//         {
//             "id": "cmoagmnzy0003w7841215s8lt",
//             "title": "Practice behavioral questions",
//             "description": "Prepare concise STAR responses for common prompts.",
//             "status": "done",
//             "priority": "low",
//             "dueDate": null,
//             "createdAt": "2026-04-22T19:42:59.327Z",
//             "updatedAt": "2026-04-22T19:42:59.327Z",
//             "userId": "cmoagmnzo0000w784ftowp8y2"
//         }
//     ],
//     "meta": {
//         "page": 1,
//         "limit": 10,
//         "total": 3,
//         "totalPages": 1
//     }
// }