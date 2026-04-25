import { useState } from "react";
import type { CreateTaskFormValues } from "@/components/ui/form-component";
import DeleteConfirmModal from "@/components/ui/delete-confirm-modal";
import FormComponent from "@/components/ui/form-component";
import ModalComponent from "@/components/ui/modal";
import TaskTable from "@/components/ui/task-table";
import { mockTasks, mockUser, type Task } from "@/mock";
import { Button } from "antd";

const toDateTimeInputValue = (isoDate: string) => {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  const timezoneOffsetMs = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - timezoneOffsetMs).toISOString().slice(0, 16);
};

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<Task | null>(null);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);
  const closeEditModal = () => setEditingTask(null);
  const closeDeleteModal = () => setDeleteCandidate(null);

  const buildTaskPayload = (values: CreateTaskFormValues, now: string) => {
    const parsedDueDate = new Date(values.dueDate);

    return {
      title: values.title.trim(),
      description: values.description.trim(),
      status: values.status,
      priority: values.priority,
      dueDate: Number.isNaN(parsedDueDate.getTime())
        ? now
        : parsedDueDate.toISOString(),
      tags: values.tags
        ? values.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
        : [],
    };
  };

  const handleCreateTask = (values: CreateTaskFormValues) => {
    const now = new Date().toISOString();
    const payload = buildTaskPayload(values, now);

    const newTask: Task = {
      id: `task_${Date.now()}`,
      ...payload,
      createdAt: now,
      updatedAt: now,
      assignee: mockUser,
    };

    setTasks((prev) => [newTask, ...prev]);
    closeCreateModal();
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = (values: CreateTaskFormValues) => {
    if (!editingTask) return;

    const now = new Date().toISOString();
    const payload = buildTaskPayload(values, now);

    setTasks((prev) =>
      prev.map((task) =>
        task.id === editingTask.id
          ? {
              ...task,
              ...payload,
              updatedAt: now,
            }
          : task,
      ),
    );

    closeEditModal();
  };

  const handleDeleteClick = (task: Task) => {
    setDeleteCandidate(task);
  };

  const handleConfirmDelete = () => {
    if (!deleteCandidate) return;

    setTasks((prev) => prev.filter((task) => task.id !== deleteCandidate.id));
    closeDeleteModal();
  };

  return (
    <div>
      <Button type="primary" onClick={openCreateModal}>
        Create Task+
      </Button>
      <TaskTable tasks={tasks} onEditTask={handleEditTask} onDeleteTask={handleDeleteClick} />
      <ModalComponent visible={isCreateModalOpen} onClose={closeCreateModal}>
        <FormComponent mode="create" onSubmit={handleCreateTask} onCancel={closeCreateModal} />
      </ModalComponent>
      <ModalComponent visible={Boolean(editingTask)} onClose={closeEditModal}>
        <FormComponent
          mode="edit"
          initialValues={
            editingTask
              ? {
                  title: editingTask.title,
                  description: editingTask.description,
                  status: editingTask.status,
                  priority: editingTask.priority,
                  dueDate: toDateTimeInputValue(editingTask.dueDate),
                  tags: editingTask.tags.join(", "),
                }
              : undefined
          }
          onSubmit={handleUpdateTask}
          onCancel={closeEditModal}
        />
      </ModalComponent>
      <DeleteConfirmModal
        task={deleteCandidate}
        visible={Boolean(deleteCandidate)}
        onCancel={closeDeleteModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Tasks;
