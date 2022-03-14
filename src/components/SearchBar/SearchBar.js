const SearchBar = () => {
  return (
    <div class='w-10/12'>
      <div class='input-group relative flex flex-row items-stretch rounded'>
        <input
          type='search'
          class='form-control relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1 font-Hubballi text-xl font-normal text-gray-700 transition ease-in-out focus:border-indigo-600 focus:bg-white focus:text-gray-700 focus:outline-none'
          placeholder='Shop for used & new camera gear...'
          aria-label='Search'
          aria-describedby='button-addon2'
        />
        <span
          class='input-group-text -mr-24 flex items-center whitespace-nowrap rounded px-3 py-1 text-center text-base font-normal text-gray-700'
          id='basic-addon2'
        >
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='search'
            class='w-4'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path
              fill='currentColor'
              d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
