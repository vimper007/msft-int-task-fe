import type { AuthUser } from "@/services/axios/auth/auth.types";

export type TaskStatus = "todo" | "in_progress" | "done";

export type TaskPriority = "low" | "medium" | "high";

export type TaskAssignee = AuthUser & { avatarUrl?: string };

export type Task = {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  assignee: TaskAssignee;
};
