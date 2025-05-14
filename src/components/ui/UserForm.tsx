import { SocketContext } from '@/context/SocketContext';
import React, { useContext, useRef } from 'react';

const UserForm = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const socketContext = useContext(SocketContext);

  const handleSave = () => {
    if (userRef.current?.value.trim()) {
      const value = userRef.current.value.trim();
      socketContext?.emit('update-name', value);
    }
  };

  return (
    <>
      <div className="mt-8">
        <input
          ref={userRef}
          className="px-2 border border-gray-500 focus:border-blue-500 outline-0 rounded"
          type="text"
          placeholder="new username"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={handleSave}
          className="text-blue-600 transition duration-300 rounded-md"
          type="button"
        >
          save
        </button>
      </div>
    </>
  );
};

export default UserForm;
