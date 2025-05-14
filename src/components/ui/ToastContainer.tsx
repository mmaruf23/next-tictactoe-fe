import { useAppSelector } from '@/store/hooks';
import React from 'react';
import ToastItem from './ToastItem';

const ToastContainer = () => {
  const toasts = useAppSelector((state) => state.toast);

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80 space-y-2 ">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
