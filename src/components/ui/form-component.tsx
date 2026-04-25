import { useEffect } from "react";
import type { TaskPriority, TaskStatus } from "@/mock";
import { Button, Form, Input, Select, Space, Typography } from "antd";

export type CreateTaskFormValues = {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  tags?: string;
};

type FormComponentProps = {
  mode?: "create" | "edit";
  initialValues?: Partial<CreateTaskFormValues>;
  onSubmit: (values: CreateTaskFormValues) => void;
  onCancel: () => void;
};

const defaultValues: Pick<CreateTaskFormValues, "status" | "priority"> = {
  status: "todo",
  priority: "medium",
};

const FormComponent = ({
  mode = "create",
  initialValues,
  onSubmit,
  onCancel,
}: FormComponentProps) => {
  const [form] = Form.useForm<CreateTaskFormValues>();

  useEffect(() => {
    form.setFieldsValue({
      ...defaultValues,
      ...initialValues,
    });
  }, [form, initialValues]);

  const handleFinish = (values: CreateTaskFormValues) => {
    onSubmit(values);
    form.resetFields();
  };

  const title = mode === "edit" ? "Edit Task" : "Create Task";
  const submitLabel = mode === "edit" ? "Save Changes" : "Add Task";

  return (
    <Form<CreateTaskFormValues>
      form={form}
      name="create-task"
      layout="vertical"
      onFinish={handleFinish}
      initialValues={defaultValues}
      autoComplete="off"
    >
      <Typography.Title level={4} style={{ marginTop: 0 }}>
        {title}
      </Typography.Title>

      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please add a task title." }]}
      >
        <Input placeholder="Task title" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please add a description." }]}
      >
        <Input.TextArea placeholder="Task details" rows={4} />
      </Form.Item>

      <Form.Item
        label="Status"
        name="status"
        rules={[{ required: true, message: "Select a status." }]}
      >
        <Select
          options={[
            { label: "To Do", value: "todo" },
            { label: "In Progress", value: "in_progress" },
            { label: "Done", value: "done" },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="Priority"
        name="priority"
        rules={[{ required: true, message: "Select a priority." }]}
      >
        <Select
          options={[
            { label: "Low", value: "low" },
            { label: "Medium", value: "medium" },
            { label: "High", value: "high" },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="Due Date"
        name="dueDate"
        rules={[{ required: true, message: "Choose a due date." }]}
      >
        <Input type="datetime-local" />
      </Form.Item>

      <Form.Item
        label="Tags (comma separated)"
        name="tags"
      >
        <Input placeholder="frontend, auth, api" />
      </Form.Item>

      <Space>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="primary" htmlType="submit">
          {submitLabel}
        </Button>
      </Space>
    </Form>
  );
};

export default FormComponent;
