import React from 'react';
import Search from './Search';

const Explore = () => {
  return (
    <div className=''>
      <div>
        <Search />
      </div>
      
      <div className='flex space-x-4 mt-4 justify-center items-center mt-[100px] gap-x-12'>
        <a 
          href="/balance" 
          className='bg-blue-500 text-white px-4 py-2 rounded text-xl font-semibold'
        >
          Balance
        </a>
        <a 
          href="/internal" 
          className='bg-black text-white px-4 py-2 rounded text-xl font-semibold'
        >
          Internal
        </a>
        <a 
          href="/normal" 
          className='bg-blue-500 text-white px-4 py-2 rounded text-xl font-semibold'
        >
          Normal
        </a>
      </div>
    </div>
  );
};

export default Explore;
