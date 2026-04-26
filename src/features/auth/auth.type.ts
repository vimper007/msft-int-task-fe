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

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: AuthUser;
  };
};

export type LoginResponse = AuthResponse;
export type SignupResponse = AuthResponse;