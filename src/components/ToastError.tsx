import { toast } from 'react-toastify';

interface ToastErrorProps {
    title: string;
}

function ToastError({ title }: ToastErrorProps) {
    return toast.error(title, {
        position: 'top-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
    });
}

export default ToastError;
