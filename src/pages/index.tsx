import { RoomList } from '@/components/ui';
import { useOnline } from '@/hooks/OnlineHooks';
import React from 'react';

export default function Home() {
  const isOnline = useOnline();

  return (
    <>
      <div className="flex justify-center items-center text-center min-h-svh dark:bg-black dark:text-white">
        <div className="h-80 font-mono">
          <h1 className="text-3xl font-serif">Welcome to the game!</h1>
          <p className="mt-4">
            Server status :{' '}
            {isOnline ? (
              <span className="border border-green-400 rounded-md px-1">
                Good
              </span>
            ) : (
              <span className="border border-red-400 rounded-md px-1">
                Error
              </span>
            )}
          </p>
          <RoomList />
        </div>
      </div>
    </>
  );
}
