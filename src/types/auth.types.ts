export type SignupRequest = {
  name: string;
  email: string;
  password: string;
}

export type AuthSession = {
  token: string;
  user: AuthUser
}

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  data: AuthSession;
};

export type LoginResponse = AuthResponse;
export type SignupResponse = AuthResponse;