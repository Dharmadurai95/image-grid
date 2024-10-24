import React, { createContext, ReactNode, useReducer } from 'react';
import Toast from './Toast';
type ToastInfo = {
    id: string,
    message: string,
    type: string
}
type ActionInfo = {
    type: string,
    payload: ToastInfo | string
}
export type ContextInfo = {
    success: (message: string) => void
    error: (message: string) => void
    warning: (message: string) => void
    info: (message: string) => void
    remove: (id: string) => void
}

function actionReducer(state: { toasts: ToastInfo[] }, action: ActionInfo) {
    switch (action.type) {
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [...state.toasts, action.payload as ToastInfo]
            }

        case "REMOVE_TOAST":
            return {
                ...state,
                toasts: state.toasts.filter(v => v.id != action.payload)
            }

        default:
            return state;
    }
}
const initialState: { toasts: ToastInfo[] } = { toasts: [] }
export const ToastContext = createContext<ContextInfo | undefined>(undefined);

const ToastContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(actionReducer, initialState)
    const toastMessages = {
        success(message: string) {
            dispatchMsg(message, 'success')
        },
        warning(message: string) {
            dispatchMsg(message, 'warning')
        },
        error(message: string) {
            dispatchMsg(message, 'error')
        },
        info(message: string) {
            dispatchMsg(message, 'info')
        },
        remove(id:string) {
            dispatch({ type: "REMOVE_TOAST", payload: id });
        }
    }

    function dispatchMsg(msg: string, type: string) {
        dispatch({
            type: "ADD_TOAST",
            payload: {
                id: Math.floor(Math.random() * 10000).toString(),
                message: msg,
                type
            }
        })
    }
    return (
        <ToastContext.Provider value={toastMessages}>
            <TostContainer toast={state.toasts} />
            {children}
        </ToastContext.Provider>
    )
}

export default ToastContextProvider;



export const TostContainer = ({ toast }: { toast: ToastInfo[] }) => {
    return (
        <div className='toast-container'>
            {toast.map((v: ToastInfo) => {
                return <Toast key={v.id} {...v} />
            })}
        </div>
    )
}

