import { useRouter } from 'next/router';
import React, { useRef } from 'react';

const UserForm = () => {
  const router = useRouter();
  const userRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    if (userRef.current) {
      localStorage.setItem('username', userRef.current?.value.trim());
      router.push('/room');
    }
  };
  return (
    <>
      <div className="mt-8">
        <input
          ref={userRef}
          className="px-2 border border-gray-500 focus:border-blue-500 outline-0 rounded"
          type="text"
          placeholder="username"
        />
      </div>
      <div className="mt-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-md px-3"
          type="button"
        >
          SAVE
        </button>
      </div>
    </>
  );
};

export default UserForm;
