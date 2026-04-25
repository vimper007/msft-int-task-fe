import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Space, Typography } from "antd";
import { Link } from "react-router";

export type AuthMode = "login" | "signup";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type SignupFormValues = LoginFormValues & {
  name: string;
  confirmPassword: string;
};

export type AuthFormValues = LoginFormValues | SignupFormValues;

type BaseAuthFormProps = {
  title: string;
  subtitle: string;
  submitLabel: string;
  footerLinkLabel: string;
  footerLinkTo: string;
};

type AuthFormProps =
  | (BaseAuthFormProps & {
      mode: "login";
      onSubmit?: (values: LoginFormValues) => void;
    })
  | (BaseAuthFormProps & {
      mode: "signup";
      onSubmit?: (values: SignupFormValues) => void;
    });

const emailRules = [
  { required: true, message: "Please enter your email address." },
  { type: "email" as const, message: "Please enter a valid email address." },
];

const passwordRules = [
  { required: true, message: "Please enter your password." },
  { min: 8, message: "Password must be at least 8 characters." },
];

const AuthForm = (props: AuthFormProps) => {
  const {
    mode,
    title,
    subtitle,
    submitLabel,
    footerLinkLabel,
    footerLinkTo,
  } = props;
  const [form] = Form.useForm<AuthFormValues>();
  const isSignup = mode === "signup";

  const handleFinish = (values: AuthFormValues) => {
    if (props.mode === "signup") {
      props.onSubmit?.(values as SignupFormValues);
      return;
    }

    props.onSubmit?.(values as LoginFormValues);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,_rgba(15,23,42,0.98),_rgba(2,6,23,1))] px-4 py-10">
      <Card
        bordered={false}
        className="w-full max-w-md shadow-2xl shadow-black/30"
        styles={{
          body: {
            padding: 32,
            background:
              "linear-gradient(180deg, rgba(15, 23, 42, 0.96), rgba(17, 24, 39, 0.92))",
          },
        }}
      >
        <Space direction="vertical" size={8} className="mb-6 w-full">
          <Typography.Title level={2} style={{ margin: 0, color: "#f8fafc" }}>
            {title}
          </Typography.Title>
          <Typography.Paragraph style={{ margin: 0, color: "#94a3b8" }}>
            {subtitle}
          </Typography.Paragraph>
        </Space>

        <Form<AuthFormValues>
          form={form}
          layout="vertical"
          autoComplete="off"
          onFinish={handleFinish}
          requiredMark={false}
        >
          {isSignup ? (
            <Form.Item
              label={<span className="text-slate-200">Full Name</span>}
              name="name"
              rules={[{ required: true, message: "Please enter your full name." }]}
            >
              <Input
                size="large"
                placeholder="Jane Doe"
                prefix={<UserOutlined />}
              />
            </Form.Item>
          ) : null}

          <Form.Item
            label={<span className="text-slate-200">Email</span>}
            name="email"
            rules={emailRules}
          >
            <Input
              size="large"
              placeholder="you@example.com"
              prefix={<MailOutlined />}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-slate-200">Password</span>}
            name="password"
            rules={passwordRules}
          >
            <Input.Password
              size="large"
              placeholder="Enter your password"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          {isSignup ? (
            <Form.Item
              dependencies={["password"]}
              label={<span className="text-slate-200">Confirm Password</span>}
              name="confirmPassword"
              rules={[
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.reject(new Error("Please confirm your password."));
                    }

                    if (value !== getFieldValue("password")) {
                      return Promise.reject(new Error("Passwords do not match."));
                    }

                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-enter your password"
                prefix={<LockOutlined />}
              />
            </Form.Item>
          ) : null}

          <Form.Item style={{ marginBottom: 12 }}>
            <Button
              block
              type="primary"
              htmlType="submit"
              size="large"
              className="mt-2"
            >
              {submitLabel}
            </Button>
          </Form.Item>
        </Form>

        <Typography.Paragraph
          style={{ margin: 0, textAlign: "center", color: "#94a3b8" }}
        >
          <Link className="font-medium text-sky-400 hover:text-sky-300" to={footerLinkTo}>
            {footerLinkLabel}
          </Link>
        </Typography.Paragraph>
      </Card>
    </div>
  );
};

export default AuthForm;
