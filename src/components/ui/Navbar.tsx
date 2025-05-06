import React, { useContext, useState } from 'react';
import UserBar from './UserBar';
import { SocketContext } from '@/contexts/SocketContext';

const Navbar = () => {
  const userData = useContext(SocketContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {/* Navbar */}
      <div className="bg-black w-full text-white flex justify-between items-center p-4 sticky top-0 z-10">
        <div className="font-mono w-30">Menu</div>
        <div className="font-serif text-2xl font-bold">TicTacToe Online</div>
        <button
          onClick={() => setIsOpen(true)}
          className="font-mono w-30 text-right"
        >
          {userData?.user?.username || ''}
        </button>
      </div>

      {/* Sidebar */}
      <UserBar isOpen={isOpen} setClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
