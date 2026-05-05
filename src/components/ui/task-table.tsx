import type { Task } from "@/mock";
import { Button, Flex, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

const columns: TableProps<Task>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "UpdatedAt",
    dataIndex: "updatedAt",
    key: "updatedAt",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <Flex gap="small" align="center" wrap>
        {tags?.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "kawaii") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
  {
    title: "Assignee",
    key: "assignee",
    render: (_, { assignee }) => assignee?.name,
  },
  {
    title: "Action",
    key: "action",
  },
];

type TaskTableProps = {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (task: Task) => void;
};

const TaskTable: React.FC<TaskTableProps> = ({ tasks, onEditTask, onDeleteTask }) => {
  const columnsWithActions: TableProps<Task>["columns"] = columns.map((column) => {
    if (column.key !== "action") return column;

    return {
      ...column,
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" size="small" onClick={() => onEditTask(record)}>
            Edit
          </Button>
          <Button danger type="link" size="small" onClick={() => onDeleteTask(record)}>
            Delete
          </Button>
        </Space>
      ),
    };
  });

  return <Table<Task> rowKey="id" columns={columnsWithActions} dataSource={tasks} />;
};

export default TaskTable;
