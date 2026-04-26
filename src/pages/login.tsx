import { authStorage } from "@/app/helper/auth-storage";
import type { AppDispatch } from "@/app/store";
import AuthForm, { type LoginFormValues } from "@/components/ui/auth-form";
import type { AuthState } from "@/features/auth/auth.type";
import { setUser } from "@/features/auth/authSlice";
import { login } from "@/services/http/auth.api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleLogin = async (payload: LoginFormValues) => {
    try {
      const res = await login(payload)
      const user = res.data.user
      const dispatchPayload = {
        id: user.id,
        name: user.name,
        createdAt: user.createdAt,
        email: user.email,
        token: res.data.token
      } as AuthState
      dispatch(setUser(dispatchPayload))
      authStorage.set(dispatchPayload)
      navigate('/task')
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message)
      }
      else {
        console.log("Unknow Error")
      }
    }
  }


  return (
    <AuthForm
      mode="login"
      title="Welcome Back"
      subtitle="Sign in to manage tasks, deadlines, and team updates in one place."
      submitLabel="Log In"
      footerLinkLabel="Need an account? Create one"
      footerLinkTo="/signup"
      onSubmit={handleLogin}
    />
  );
};

export default LoginPage;
