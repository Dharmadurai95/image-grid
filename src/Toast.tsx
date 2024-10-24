import { useEffect, useRef } from 'react'
import { ContextInfo } from './TostContainer'
import { useToast } from './useToast'

const toastType: Record<string, { icon: string, iconClass: string, progressBarClass: string }> = {
    success: {
        icon: '../public/success.jpg',
        iconClass: "success-icon",
        progressBarClass: "success",
    },
    warning: {
        icon: '../public/warning.jpg',
        iconClass: "warning-icon",
        progressBarClass: "warning",
    },
    error: {
        icon: '../public/error.jpg',
        iconClass: "error-icon",
        progressBarClass: "error",
    },
    info: {
        icon: '../public/info.png',
        iconClass: "info-icon",
        progressBarClass: "info",
    }
}
const Toast = ({ message, id, type }: { message: string, id: string, type: string }) => {
    const toast = useToast()
    const { icon, iconClass, progressBarClass } = toastType[type]
    const timerId = useRef<number | null>(null);
    const progress = useRef<HTMLDivElement | null>(null)

    function handleRemoveToast() {
        toast?.remove(id)
    }
    useEffect(() => {


        timerId.current = setTimeout(() => {
            handleRemoveToast()
        }, 4000)



        return () => {
            if (timerId && timerId.current) {

                clearTimeout(timerId.current)
            }
        }
    }, [])

    function onMouseEnter() {
        if (timerId.current) clearTimeout(timerId.current);
        if (progress.current) progress.current.style.animationPlayState = "paused";

    }
    function onMouseLeave() {
        if (progress.current && progress.current.parentElement) {

            const remainingTimer = (progress.current?.offsetWidth / progress.current.parentElement?.offsetWidth) * 4000;
            progress.current.style.animationPlayState = 'running';
            timerId.current = setTimeout(() => handleRemoveToast(), remainingTimer)
        }
    }

    return (
        <div className='toast' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className='toast-msg'>

                <img className={iconClass} src={icon} width={50} height={50} alt={`${type} icon`}></img>
                <p className='toast-message'>{message}</p>
                <button className='dismiss-btn' onClick={handleRemoveToast}>
                    X
                </button>
            </div>
            <div className='toast-progress'>
                <div ref={progress} className={`toast-progress-bar ${progressBarClass}`}></div>
            </div>
        </div>
    )
}

export default Toast