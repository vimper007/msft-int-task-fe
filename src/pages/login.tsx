import AuthForm from "@/components/ui/auth-form";

const LoginPage = () => {
  return (
    <AuthForm
      mode="login"
      title="Welcome Back"
      subtitle="Sign in to manage tasks, deadlines, and team updates in one place."
      submitLabel="Log In"
      footerLinkLabel="Need an account? Create one"
      footerLinkTo="/signup"
    />
  );
};

export default LoginPage;
