import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from '../app/store'
import { useEffect, useState } from "react"
import type { AuthState } from "@/features/auth/auth.type"
import { setUser } from "@/features/auth/authSlice"

export const useAuthBootstrap = () => {
    const [isBootstrapped, setIsBootstrapped] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const storeAuth = useSelector((store: RootState)=> store.auth)
    
    
    useEffect(() => {
        const localAuth = localStorage.getItem("auth")
        const parsedLocalAuth = localAuth ? JSON.parse(localAuth) as AuthState : null

        if(parsedLocalAuth?.token) {
            dispatch(setUser(parsedLocalAuth))
        }

        setIsBootstrapped(true)
    }, [dispatch])
    

    return { storeAuth, isBootstrapped }
}

    
