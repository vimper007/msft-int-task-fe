import LoginPage from "@/pages/login"
import SignUp from "@/pages/signup"
import Tasks from "@/pages/tasks"
import { Route, Routes } from "react-router"

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<LoginPage/>} path="/login"/>
      <Route element={<SignUp/>} path="/signup"></Route>
      <Route element={<Tasks/>} path="/task"></Route>
    </Routes>
  )
}

export default AppRouter