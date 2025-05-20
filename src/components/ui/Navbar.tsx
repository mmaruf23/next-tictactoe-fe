import React, { useState } from 'react';
import UserBar from './UserBar';
import { useAppSelector } from '@/store/hooks';
import Link from 'next/link';

const Navbar = () => {
  const username = useAppSelector((state) => state.user.username);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {/* Navbar */}
      <div className="bg-black w-full text-white flex justify-between items-center p-4 sticky top-0 z-10">
        <div className="font-mono w-30 flex gap-4">
          <Link href={'/'}>Home</Link>
          <Link href={'/room'}>Room</Link>
        </div>
        <div className="font-serif text-2xl font-bold">TicTacToe Online</div>
        <div className="w-30">
          {username && (
            <button
              onClick={() => setIsOpen(true)}
              className="font-mono text-right"
            >
              {username}
            </button>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <UserBar
        username={username || ''}
        isOpen={isOpen}
        setClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;
