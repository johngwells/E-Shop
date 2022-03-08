import React from 'react';

const HomePage = () => {
  return (
    <div className='flex flex-wrap p-8'>
      <div className='border w-3/6 h-80 p-3.5'>
        <div className='border flex justify-center items-center h-72'>
          <div className='border-2 border-gray-600 rounded-lg w-36 h-24 flex justify-center items-center flex-col'>
            <span className='text-4xl font-Hubballi'>Fujifilm</span>
            <span className='text-2xl italic font-Hubballi'>Mirrorless</span>
          </div>
        </div>
      </div>
      <div className='border w-3/6 h-80 p-3.5'>
        <div className='border flex justify-center items-center h-72'>
          <div className='border-2 border-gray-600 rounded-lg w-36 h-24 flex justify-center items-center flex-col'>
            <span className='text-4xl font-Hubballi'>Sony</span>
            <span className='text-2xl italic font-Hubballi'>Mirrorless</span>
          </div>
        </div>
      </div>
      <div className='border w-3/6 h-80 p-3.5'>
        <div className='border flex justify-center items-center h-72'>
          <div className='border-2 border-gray-600 rounded-lg w-36 h-24 flex justify-center items-center flex-col'>
            <span className='text-4xl font-Hubballi'>Nikon</span>
            <span className='text-2xl italic font-Hubballi'>DSLR</span>
          </div>
        </div>
      </div>
      <div className='border w-3/6 h-80 p-3.5'>
        <div className='border flex justify-center items-center h-72'>
          <div className='border-2 border-gray-600 rounded-lg w-36 h-24 flex justify-center items-center flex-col'>
            <span className='text-4xl font-Hubballi'>Canon</span>
            <span className='text-2xl italic font-Hubballi'>DSLR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
