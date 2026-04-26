import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from '../app/store'
import { useEffect, useState } from "react"
import { setUser } from "@/features/auth/authSlice"
import { authStorage } from "@/app/helper/auth-storage"

export const useAuthBootstrap = () => {
    const [isBootstrapped, setIsBootstrapped] = useState(false)
    const dispatch = useDispatch<AppDispatch>()
    const storeAuth = useSelector((store: RootState)=> store.auth)
    
    
    useEffect(() => {
        const localAuth = authStorage.get()
        if(localAuth){
            dispatch(setUser(localAuth))
        }
        setIsBootstrapped(true)
    }, [dispatch])
    

    return { storeAuth, isBootstrapped }
}

