import SearchBar from '../../components/searchbar/SearchBar';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <nav className='mb-6 flex flex-row'>
      <div className='w-3/12'>
        <Link to='/'>
          <div className='flex flex-row items-center ml-6'>
            <img
              src='static/polaroid.svg'
              className='w-8 h-8 bg-indigo-700 rounded-md mr-1 mt-1'
            />
            <h1 className='text-5xl font-Hubballi text-indigo-700'>Aperture</h1>
          </div>
        </Link>
      </div>
      <div className='mt-2 w-full -mr-64'>
        <SearchBar />
      </div>
      <div className='w-1/3 flex items-center mt-1 -ml-16'>
        <button
          type='button'
          class='inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
        >
          Sell Your Gear
        </button>
      </div>
      <div className='mr-6 flex flex-row w-40'>
        <div className='flex items-center p-1 mt-1 ml-4'>
          <span className='font-Hubballi text-xl'>Log In</span>
        </div>
        <div className='flex items-center p-1 mt-1'>
          <img src='static/shopping-cart.svg' className='w-8 h-8' />
        </div>
      </div>
    </nav>
    <nav className='ml-11 bg-slate-200 mr-11'>
      <ul className='flex flex-row p-2'>
        <Link
          to='/shop'
          className='p-1 font-Hubballi text-xl hover:text-indigo-700'
        >
          Shop
        </Link>
        <li className='p-1 font-Hubballi text-xl'>Brands</li>
        {/* <li className='p-1 font-Hubballi text-xl'>Category</li> */}
      </ul>
    </nav>
  </>
);

export default Navigation;
