import type { AuthSession } from "@/types/auth.types";

export const authStorage = {
  get: () => {
    const localAuth = localStorage.getItem("auth");
    if (!localAuth) return null;

    try {
      return JSON.parse(localAuth);
    } catch (error) {
      localStorage.removeItem("auth");
      return null;
    }
  },
  set: (payload: AuthSession) => {
    localStorage.setItem("auth", JSON.stringify(payload));
  },
  remove: () => {
    localStorage.removeItem("auth");
  },
};
