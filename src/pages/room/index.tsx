import { Navbar, RoomList } from '@/components/ui';
import { useSocket } from '@/context/SocketContext';
import React from 'react';

const RoomPage = () => {
  const socket = useSocket();
  return (
    <div className="min-h-svh flex justify-center">
      <div className="md:w-3xl lg:w-5xl w-full bg-white">
        <Navbar />
        <div className="flex flex-col items-center">
          <div className="my-4">
            {socket?.connected ? (
              <button className="px-2 py-1 rounded bg-green-400 text-white hover:bg-green-700">
                Create a new room
              </button>
            ) : (
              <button className="px-2 py-1 rounded bg-gray-400 text-white">
                Create a new room
              </button>
            )}
          </div>
          <p>Available Room :</p>
          {!socket?.connected && (
            <span className="bg-red-500 rounded text-white px-1">
              Server offline
            </span>
          )}
          <RoomList />
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
