import { store, type AppDispatch, type RootState } from "@/app/store";
import AuthForm, { type SignupFormValues } from "@/components/ui/auth-form";
import { signup } from "@/services/http/auth.api";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/features/auth/authSlice";
import { AxiosError } from "axios";
import type { AuthState } from "@/features/auth/auth.type";
import { useEffect } from "react";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>()
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    console.log("AUTH FROM REDUX:", auth);
  }, [auth])

  const handleSignup = async (values: SignupFormValues) => {
    try {
      const res = await signup({
        name: values.name,
        email: values.email,
        password: values.password,
      });
      const responseData = res.data.data;
      const user = responseData.user;

      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        token: responseData.token,
      };
      const action = setUser(payload);
      console.log("ACTION:", action);

      dispatch(setUser(payload))
      setAuthToLocalStorage(payload)

      console.log("STORE AFTER DISPATCH:", store.getState());


    } catch (error) {
      if (error instanceof AxiosError)
        console.error(error.message)
      else console.error('Try again later')
    }
  };

  const setAuthToLocalStorage = (payload: AuthState) => {
    localStorage.setItem("auth", JSON.stringify(payload))
  }

  return (
    <AuthForm
      mode="signup"
      title="Create Your Account"
      subtitle="Set up your workspace access and start organizing tasks with your team."
      submitLabel="Sign Up"
      footerLinkLabel="Already have an account? Log in"
      footerLinkTo="/login"
      onSubmit={handleSignup}
    />
  );
};

export default SignUp;
