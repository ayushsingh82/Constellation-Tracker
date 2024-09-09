import React from 'react';
import Search from './Search';

const Explore = () => {
  return (
    <div className=''>
      <div>
        <Search />
      </div>
      
      <div className='flex space-x-4 mt-4 justify-center items-center'>
        <a 
          href="/balance" 
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Balance
        </a>
        <a 
          href="/internal" 
          className='bg-green-500 text-white px-4 py-2 rounded'
        >
          Internal
        </a>
        <a 
          href="/normal" 
          className='bg-purple-500 text-white px-4 py-2 rounded'
        >
          Normal
        </a>
      </div>
    </div>
  );
};

export default Explore;
