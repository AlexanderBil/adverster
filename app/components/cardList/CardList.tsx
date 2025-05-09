'use client';
import React, { useState } from 'react';
import Card from '../card/Card';
import { User } from '@/app/types/types';
import SearchBar from '../searchBar/SearchBar';

const CardList = ({ users }: { users: User[] }) => {
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('name');

  const filteredUsers = users.filter((user) => {
    switch (filter) {
      case 'name':
        return user.name.toLowerCase().includes(inputValue.toLowerCase());
      case 'email':
        return user.email.toLowerCase().includes(inputValue.toLowerCase());
      case 'city':
        return user.address.city
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      case 'street':
        return user.address.street
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      default:
        return user;
    }
  });
  console.log('filteredUsers', filteredUsers);

  return (
    <div className="m-5 tablet:w-fit mobile:w-full">
      <SearchBar
        setInputValue={setInputValue}
        setFilter={setFilter}
        filter={filter}
      />
      <div className="grid grid-cols-4 gap-5 items-center mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
        {!filteredUsers.length ? <p className="text-amber-50">No Data...</p> : filteredUsers.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
