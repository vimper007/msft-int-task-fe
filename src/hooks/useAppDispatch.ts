import type { AppDispatch } from "@/app/store"
import { useDispatch } from "react-redux"

export const useAppDispatch = () => {
    const dispatch = useDispatch<AppDispatch>()
    return dispatch
}