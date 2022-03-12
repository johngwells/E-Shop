import SearchBar from '../../components/searchbar/SearchBar';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <nav className='mb-6 flex flex-row'>
      <div className='w-full'>
        <Link to='/'>
          <h1 className='text-5xl font-Hubballi text-indigo-700'>Aperture</h1>
        </Link>
      </div>
      <div className='flex ml-28 mt-3 w-full'>
        <SearchBar />
      </div>
      <div className='flex items-center p-1 mt-2'>
        <span className='font-Hubballi text-xl'>Signin</span>
      </div>
      <div className='flex items-center p-1 mt-2'>
        <span className='font-Hubballi text-xl'>Cart</span>
      </div>
    </nav>
    <nav className='ml-11 bg-slate-200 mr-11'>
      <ul className='flex flex-row p-2'>
        <Link to='/shop' className='p-1 font-Hubballi text-xl hover:text-indigo-700'>
          Shop
        </Link>
        <li className='p-1 font-Hubballi text-xl'>Category</li>
        <li className='p-1 font-Hubballi text-xl'>Brands</li>
      </ul>
    </nav>
  </>
);

export default Navigation;
