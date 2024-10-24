import { useContext } from "react"
import { ToastContext } from "./TostContainer"


export function useToast() {
    return useContext(ToastContext)
}