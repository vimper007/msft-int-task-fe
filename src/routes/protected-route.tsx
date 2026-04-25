import { useSelector } from 'react-redux'
import { type RootState } from '../app/store'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((store:RootState)=>!!store.auth.token)
  return (
    isAuthenticated ? <Outlet/> : <Navigate to="/login" replace/>
  )
}

export default ProtectedRoute
