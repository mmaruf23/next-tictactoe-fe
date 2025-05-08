import { useEffect, useState } from 'react';

export type Data = {
  username?: string;
  clientId?: string;
};

export const useUser = () => {
  const [user, setUser] = useState<Data | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const dataRaw = localStorage.getItem('data');

    if (!dataRaw) {
      const newData: Data = {
        username: `Guest${Math.floor(Math.random() * 1000)}`,
      };

      localStorage.setItem('data', JSON.stringify(newData));
      setUser(newData);
      return;
    }

    try {
      const data: Data = JSON.parse(dataRaw);
      setUser(data);
    } catch (e) {
      console.error('Failed to parse user data:', e);
      setUser(null);
    }
  }, []);

  return { user, setUser };
};
