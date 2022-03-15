import SearchBar from '../../components/searchbar/SearchBar';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <nav className='mb-4 flex w-screen flex-row'>
      <div className='w-80'>
        <Link to='/'>
          <div className='ml-6 flex flex-row items-center'>
            <img
              src='static/polaroid.svg'
              className='mr-1 mt-1 h-8 w-8 rounded-md bg-primary'
            />
            <h1 className='font-Hubballi text-5xl'><span className='text-primary'>@</span>perture</h1>
          </div>
        </Link>
      </div>
      <div className='mt-2 ml-10 w-full'>
        <SearchBar />
      </div>
      <div className='mr-14 ml-6 flex w-8/12 justify-between'>
        <div className='mt-1 flex w-40 items-center'>
          <button type='button' class='btn btn-accent btn-outline btn-sm h-10'>
            Sell Your Gear
          </button>
        </div>
        <div className='flex flex-row'>
          <div className='mt-1 flex items-center p-1'>
            <Link to='/signin'>
              <span className='link link-hover font-Hubballi text-xl'>
                Log In
              </span>
            </Link>
          </div>
          <div className='flex items-center p-1'>
            <img src='static/shopping-cart.svg' className='h-8 w-8' />
          </div>
        </div>
      </div>
    </nav>
    <nav className='ml-6 mr-6 flex h-10 items-center bg-base-200'>
      <ul className='flex flex-row p-2'>
        <Link
          to='/shop'
          className='link link-primary p-1 font-Hubballi text-xl'
        >
          Shop
        </Link>
      </ul>
    </nav>
  </>
);

export default Navigation;
