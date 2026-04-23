import TaskTable from "@/components/ui/task-table"
import { Button } from "antd"

const Tasks = () => {
  return (
    <div>
        <Button>Create Task+</Button>
        <TaskTable />
        {/* <TestTable/> */}
    </div>
  )
}

export default Tasks