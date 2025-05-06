import { useEffect, useState } from 'react';

export const useUser = () => {
  const [username, setUsername] = useState<string>('');
  useEffect(() => {
    let user = localStorage.getItem('username');

    if (!user) {
      user = `Guest${Math.floor(Math.random() * 1000)}`;
      localStorage.setItem('username', user);
    }

    setUsername(user);
  }, []);

  return username;
};
