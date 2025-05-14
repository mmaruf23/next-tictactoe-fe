import { useAppDispatch } from '@/store/hooks';
import { showToast } from '@/store/toastSlice';

const useToast = () => {
  const dispatch = useAppDispatch();

  const toast = {
    success: (message: string, duration: number = 3000) => {
      dispatch(showToast({ message, type: 'success', duration }));
    },
    error: (message: string, duration: number = 3000) => {
      dispatch(showToast({ message, type: 'error', duration }));
    },
    info: (message: string, duration: number = 3000) => {
      dispatch(showToast({ message, type: 'info', duration }));
    },
    warning: (message: string, duration: number = 3000) => {
      dispatch(showToast({ message, type: 'warning', duration }));
    },
  };

  return toast;
};
export default useToast;
