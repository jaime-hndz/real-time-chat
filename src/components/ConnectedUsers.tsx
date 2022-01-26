import React, { FC } from 'react';

interface Props{
    Users: string[]
}

export const ConnectedUsers:FC<Props> = ({Users}) => {
  return <div className='user-list'>
      <h4>Usuarios conectados</h4>
      {Users.map((user,index) => {
        return <h6 key={index}>{user}</h6>
      })}
  </div>;
};
