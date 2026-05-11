import { useState, type ChangeEvent } from "react";
import type { CreateTaskFormValues } from "@/components/ui/form-component";
import DeleteConfirmModal from "@/components/ui/delete-confirm-modal";
import FormComponent from "@/components/ui/form-component";
import ModalComponent from "@/components/ui/modal";
import TaskTable from "@/components/ui/task-table";
import { Button, Input } from "antd";
import { useDeleteTasksMutation, useEditTasksMutation, useGetTasksQuery } from "@/features/tasks/tasks.api";
import type { Task } from "@/features/tasks/tasks.types";
import { useDebounce } from "@/hooks/useDebounce";

const toDateTimeInputValue = (isoDate: string) => {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "";

  const timezoneOffsetMs = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - timezoneOffsetMs).toISOString().slice(0, 16);
};

const Tasks = () => {
  const [, setTasks] = useState<Task[]>();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deleteCandidate, setDeleteCandidate] = useState<Task | null>(null);
  const [search, setSearch] = useState("")
  const debouncedSearchValue = useDebounce(search)

  const {data:taskData} = useGetTasksQuery({search:debouncedSearchValue})
  const [editTasks]=useEditTasksMutation()
  const [deleteTasks] = useDeleteTasksMutation()

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);
  const closeEditModal = () => setEditingTask(null);
  const closeDeleteModal = () => setDeleteCandidate(null);
  const { Search } = Input

  
  const handleOnSearch = (value:string) => {
    setSearch(value)
  }
  const handleOnChamge = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    console.log(value)
    setSearch(value)
  }
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
      // tags: values.tags
      //   ? values.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
      //   : [],
    };
  };

  const handleCreateTask = (values: CreateTaskFormValues) => {
    const now = new Date().toISOString();
    const payload = buildTaskPayload(values, now);
    payload

    closeCreateModal();
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = async(values: CreateTaskFormValues) => {
    if (!editingTask) return;

    const now = new Date().toISOString();
    const payload = buildTaskPayload(values, now);

    setTasks((prev) =>
      prev?.map((task) =>
        task.id === editingTask.id
          ? {
              ...task,
              ...payload,
              updatedAt: now,
            }
          : task,
      ),
    );
    await editTasks({body:payload, id: editingTask.id})
    closeEditModal();
  };

  const handleDeleteClick = (task: Task) => {
    setDeleteCandidate(task);
  };

  const handleConfirmDelete = async() => {
    if (!deleteCandidate) return;

    setTasks((prev) => prev?.filter((task) => task.id !== deleteCandidate.id));
    await deleteTasks(deleteCandidate.id)
    closeDeleteModal();
  };


  return (
    <div>
      <Button type="primary" onClick={openCreateModal}>
        Create Task+
      </Button>
      <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={handleOnSearch}
      onChange={handleOnChamge}
      // value={search}
    />

      <TaskTable tasks={taskData ?? []}  onEditTask={handleEditTask} onDeleteTask={handleDeleteClick} />
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
                  // tags: editingTask.tags?.join(", "),
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
