import type { SignupPayload } from "@/features/auth/auth.type";
import { http } from "./client";


export async function signup(payload: SignupPayload) {
  const res = await http.post("/api/auth/signup", payload);
  return res;
}
