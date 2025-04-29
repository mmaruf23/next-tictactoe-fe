import { useEffect, useState } from 'react';

export const useOnline = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  function handleStatusChange() {
    setIsOnline(navigator.onLine);
  }

  useEffect(() => {
    handleStatusChange();

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, []);

  return isOnline;
};
