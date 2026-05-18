import { authStorage } from "@/helper/auth-storage";
import type { AppDispatch } from "@/app/store";
import AuthForm, { type LoginFormValues } from "@/components/ui/auth-form";
import { setUser } from "@/features/auth/authSlice";
import { login } from "@/services/axios/auth/auth.api";
import type { AuthSession } from "@/services/axios/auth/auth.types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { message } from "antd";
import { useState } from "react";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState<boolean>()


  const handleLogin = async (payload: LoginFormValues) => {
    setIsLoading(true)
    try {
      const res = await login(payload);
      const user = res.data.user;
      const dispatchPayload: AuthSession = {
        token: res.data.token,
        user: {
          id: user.id,
          name: user.name,
          createdAt: user.createdAt,
          email: user.email,
        },
      };
      dispatch(setUser(dispatchPayload));
      authStorage.set(dispatchPayload);
      navigate("/task");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        messageApi.error(error.message)
      } else {
        console.error("Unknow Error");
        messageApi.error("Unknow Error")
      }
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <>
      {contextHolder}
      <AuthForm
        mode="login"
        title="Welcome Back"
        subtitle="Sign in to manage tasks, deadlines, and team updates in one place."
        submitLabel="Log In"
        footerLinkLabel="Need an account? Create one"
        footerLinkTo="/signup"
        onSubmit={handleLogin}
        isLoading={isLoading}
      />
    </>
  );
};

export default LoginPage;
