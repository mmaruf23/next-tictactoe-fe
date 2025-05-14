import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

const RoomList = () => {
  const rooms = useSelector((state: RootState) => state.room);
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
