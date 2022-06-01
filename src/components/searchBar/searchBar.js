const SearchBar = () => {
  return (
    <div className='form-control'>
      <div className='input-group input-group-sm'>
        <input
          type='text'
          placeholder='Shop for used & new camera gear...'
          className='input input-bordered input-sm h-9 w-full'
        />
        <button className='btn btn-square btn-sm h-9'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
