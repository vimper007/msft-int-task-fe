import type { AuthState } from "@/features/auth/auth.type";

export const authStorage = {
  get: () => {
    const localAuth = localStorage.getItem("auth");
    if (!localAuth) return null;

    try {
      return JSON.parse(localAuth) as AuthState;
    } catch (error) {
      localStorage.removeItem("auth");
      return null;
    }
  },
  set: (payload: AuthState) => {
    localStorage.setItem("auth", JSON.stringify(payload));
  },
  remove: () => {
    localStorage.removeItem("auth");
  },
};
