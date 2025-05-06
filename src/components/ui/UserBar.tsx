import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment, useContext } from 'react';
import UserForm from './UserForm';
import { SocketContext } from '@/contexts/SocketContext';

type UserBarProps = {
  isOpen: boolean;
  setClose: () => void;
};

const UserBar = ({ isOpen, setClose }: UserBarProps) => {
  const userData = useContext(SocketContext);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setClose}>
        {/* Overlay */}
        <TransitionChild
          as={Fragment}
          enter="duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </TransitionChild>

        {/* Sidebar Panel */}
        <TransitionChild
          as={Fragment}
          enter="duration-300 transform ease-out"
          enterFrom="translate-x-full"
          enterTo="-translate-x-0"
          leave="duration-200 transform ease-in"
          leaveFrom="-translate-x-0"
          leaveTo="translate-x-full"
        >
          <DialogPanel className="fixed top-0 right-0 h-full w-64 bg-white/80 p-6 shadow-lg">
            <DialogTitle className="text-lg font-bold mb-4">
              {userData?.user?.username || ''}

              <p className="font-mono text-sm font-normal">ID :</p>
            </DialogTitle>
            <div className="border">
              <UserForm />
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
};

export default UserBar;
