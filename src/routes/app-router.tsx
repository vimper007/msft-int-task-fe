import LoginPage from "@/pages/login"
import SignUp from "@/pages/signup"
import Tasks from "@/pages/tasks"
import { Navigate, Route, Routes } from "react-router"
import ProtectedRoute from "./protected-route"
import { useAuthBootstrap } from "@/hooks/useAuthBootstrap"

const AppRouter = () => {
  const { isBootstrapped } = useAuthBootstrap()

  if (!isBootstrapped) {
    return null
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SignUp />} path="/signup"></Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<Tasks />} path="/task" ></Route>
      </Route>
      <Route path="*" element={<Navigate to='/login' replace/>} />
    </Routes>
  )
}

export default AppRouter
