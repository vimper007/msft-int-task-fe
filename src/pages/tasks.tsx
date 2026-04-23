import FormComponent from "@/components/ui/form-component"
import ModalComponent from "@/components/ui/modal"
import TaskTable from "@/components/ui/task-table"
import { Button } from "antd"

const Tasks = () => {

  return (
    <div>
        <Button>Create Task+</Button>
        <TaskTable />
        {/* <TestTable/> */}
        <ModalComponent visible={true}>
          <FormComponent/>
        </ModalComponent>
    </div>
  )
}

export default Tasks