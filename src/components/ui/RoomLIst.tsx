import { useAppSelector } from '@/store/hooks';
import React from 'react';

const RoomList = () => {
  const rooms = useAppSelector((state) => state.room);
  return (
    <>
      <div>
        <ul>
          {rooms.map((room) => {
            return (
              <li
                key={room.roomId}
                className={
                  room.players.length == 2 ? 'text-red-400' : 'text-green-400'
                }
              >
                {room.host}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default RoomList;
