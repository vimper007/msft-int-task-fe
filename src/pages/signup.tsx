import { type AppDispatch } from "@/app/store";
import AuthForm, { type SignupFormValues } from "@/components/ui/auth-form";
import { signup } from "@/services/axios/auth.api";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/auth/authSlice";
import { AxiosError } from "axios";
import { authStorage } from "@/helper/auth-storage";
import { useNavigate } from "react-router";

const SignUp = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

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
        token: responseData.token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
        }
      };
      dispatch(setUser(payload))
      authStorage.set(payload)
      navigate('/task')

    } catch (error) {
      if (error instanceof AxiosError)
        console.error(error.message)
      else console.error('Try again later')
    }
  };

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
