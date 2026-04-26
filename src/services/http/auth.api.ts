import type { AuthResponse, SignupPayload } from "@/features/auth/auth.type";
import { http } from "./client";
import type { LoginFormValues } from "@/components/ui/auth-form";
const BASE_URL = "http://localhost:4000";

export async function signup(payload: SignupPayload) {
  const res = await http.post("/api/auth/signup", payload);
  return res;
}

export async function login(payload: LoginFormValues): Promise<AuthResponse> {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(payload),
    
  })
  const data = await res.json()

  if (!res.ok) {
    throw new Error(data.message || "Login failed")
  }

  return data
}


// {
//     "success": true,
//     "message": "Login successful",
//     "data": {
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE3NzcxNzc5OTAsImV4cCI6MTc3Nzc4Mjc5MCwic3ViIjoiY21vZjluY21yMDAwOHc3eGdzaDBuaHl1ZCJ9.5QyHbTqrfg4Hle1DPiYquLUu3IjPtMpYZ0X8hws0uHA",
//         "user": {
//             "id": "cmof9ncmr0008w7xgsh0nhyud",
//             "name": "asdadasd",
//             "email": "test@test.com",
//             "createdAt": "2026-04-26T04:26:24.818Z"
//         }
//     }
// }

// {
//     "success": false,
//     "message": "Invalid email or password",
//     "stack": "Error: Invalid email or password\n    at Object.login (C:\\Code\\NodeJS\\taskApi\\src\\services\\auth.service.ts:54:11)\n    at async login (C:\\Code\\NodeJS\\taskApi\\src\\controllers\\auth.controller.ts:14:18)"
// }
