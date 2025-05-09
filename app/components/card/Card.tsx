import React from 'react';
import { User } from '@/app/types/types';

const Card = ({ user }: { user: User }) => {
  return (
    <div className="mobile:w-full p-2 rounded overflow-hidden shadow-lg bg-gradient-to-b from-sky-400 to-blue-200 dark:from-gray-800 dark:to-gray-700">
      <p><span className='font-bold'>Name:</span> {user.name}</p>
      <p><span className='font-bold'>Email:</span> {user.email}</p>
      <p><span className='font-bold'>City:</span> {user.address.city}</p>
      <p><span className='font-bold'>Street:</span> {user.address.street}</p>
    </div>
  );
};

export default Card;
