export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

export type TaskApiResponse = {
  id: string;
  title: string;
  description: string | null; // nullable because DB is nullable
  status: "todo" | "in_progress" | "done";
  priority: "low" | "medium" | "high";
  dueDate: string | null; // nullable
  createdAt: string;
  updatedAt: string;
  userId: string; // raw FK, no user object
};

export type UserApiResponse = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};
