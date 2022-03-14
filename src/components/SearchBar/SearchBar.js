const SearchBar = () => {
  return (
    <div class='form-control'>
      <div class='input-group input-group-sm'>
        <input
          type='text'
          placeholder='Shop for used & new camera gear...'
          class='input input-bordered input-sm h-9 w-full'
        />
        <button class='btn btn-square btn-sm h-9'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
