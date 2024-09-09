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
          className='bg-purple-500 text-black px-4 py-2 rounded text-xl font-semibold'
        >
          Balance
        </a>
        <a 
          href="/internal" 
          className='bg-purple-500 text-black  px-4 py-2 rounded text-xl font-semibold'
        >
          Internal Transactions
        </a>
        <a 
          href="/normal" 
          className='bg-purple-500 text-black  px-4 py-2 rounded text-xl font-semibold'
        >
          Normal Transactions
        </a>
      </div>
    </div>
  );
};

export default Explore;
