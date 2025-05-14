import React, { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { removeToast } from '@/store/toastSlice';
import type { Toast } from '@/store/toastSlice';

interface ToastItemProps {
  toast: Toast;
}

const ToastItem = ({ toast }: ToastItemProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeToast(toast.id));
    }, toast.duration);

    return () => clearTimeout(timer);
  }, [toast, dispatch]);

  const color =
    toast.type === 'success'
      ? 'bg-green-500'
      : toast.type === 'error'
      ? 'bg-red-500'
      : toast.type === 'warning'
      ? 'bg-yellow-500 text-black'
      : 'bg-blue-500';

  return (
    <div className={`text-white px-4 py-2 rounded shadow mb-2 ${color}`}>
      {toast.message}
    </div>
  );
};

export default ToastItem;
