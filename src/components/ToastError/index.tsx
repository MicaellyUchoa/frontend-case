import { toast } from 'react-toastify';
import { IToastErrorProps } from '../../interfaces/IToastErrorProps';

function ToastError({ title }: IToastErrorProps) {
    return toast.error(title, {
        position: 'top-right',
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
    });
}

export default ToastError;
