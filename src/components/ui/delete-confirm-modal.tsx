import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Button, Space, Typography } from "antd";
import type { Task } from "@/mock";

type DeleteConfirmModalProps = {
  task: Task | null;
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

const DeleteConfirmModal = ({
  task,
  visible,
  onCancel,
  onConfirm,
}: DeleteConfirmModalProps) => {
  useEffect(() => {
    if (!visible) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCancel();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [visible, onCancel]);

  if (!visible || !task) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-black/55 p-4"
      onClick={onCancel}
      role="presentation"
    >
      <div
        className="w-full max-w-md rounded-lg bg-white p-5 shadow-2xl dark:bg-gray-900"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-task-title"
      >
        <Typography.Title id="delete-task-title" level={4} style={{ marginTop: 0 }}>
          Delete Task
        </Typography.Title>
        <Typography.Paragraph>
          Are you sure you want to delete <strong>{task.title}</strong>?
        </Typography.Paragraph>
        <Space>
          <Button onClick={onCancel}>Cancel</Button>
          <Button danger type="primary" onClick={onConfirm}>
            Confirm Delete
          </Button>
        </Space>
      </div>
    </div>,
    document.body,
  );
};

export default DeleteConfirmModal;
