export type SignupPayload = {
  name: string;
  email: string;
  password: string;
}


export type AuthState = {
  id: string | null;
  name: string | null;
  email: string | null;
  createdAt: string | null;
  token: string | null;
}