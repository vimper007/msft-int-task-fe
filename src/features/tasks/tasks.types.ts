import type { AuthUser } from "@/services/axios/auth/auth.types";

export type TaskStatus = "todo" | "in_progress" | "done";

export type TaskPriority = "low" | "medium" | "high";

export type TaskAssignee = AuthUser & { avatarUrl?: string };

export type TaskSortBy =
  | "id"
  | "title"
  | "description"
  | "status"
  | "priority"
  | "dueDate"
  | "createdAt"
  | "updatedAt"
  | "userId";

export type TaskOrderBy = "desc" | "asc";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  assignee: TaskAssignee;
};

export type GetTasksParams = {
  status?: TaskStatus;
  priority?: TaskPriority;
  search?: string;
  sortBy?: TaskSortBy;
  order?: TaskOrderBy;
  page?: number;
  limit?: number;
};
