import { mockTasks, type Task } from "@/mock";
import { Flex, Space, Table, Tag } from "antd";
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
        {tags.map((tag) => {
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
    dataIndex: "assignee",
    key: "assignee",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="medium">
        {/* <a>Invite {record.name}</a> */}
        <a>Delete</a>
      </Space>
    ),
  },
];

const TaskTable: React.FC = () => (
  <Table<Task> columns={columns} dataSource={mockTasks} />
);

export default TaskTable;
