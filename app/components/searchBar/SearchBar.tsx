'use client';
import React from 'react';

type SearchBarProps = {
  setInputValue: (value: string) => void;
  setFilter: (value: string) => void;
  filter: string;
};

const SearchBar = ({ setInputValue, setFilter, filter }: SearchBarProps) => {
  return (
      <form className="flex mb-5 tablet:flex-nowrap mobile:flex-wrap" action="">
          <select
            className='tablet:w-40 mobile:w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            name="select"
            id="job-location"
          >
            <option value="name">By name</option>
            <option value="email">By email</option>
            <option value="city">By city</option>
            <option value="street">By street</option>
          </select>

        <div className='w-full tablet:ml-5 tablet:mt-0 mobile:ml-0 mobile:mt-5'>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
            type="text"
          />
        </div>
      </form>
  );
};

export default SearchBar;
