import HomePage from './pages/homepage/Homepage';
import SearchBar from './components/searchbar/SearchBar';

function App() {
  return (
    <div className='p-2'>
      <nav className='mb-5 flex flex-row'>
        <div className='w-full'>
          <h1 className='text-5xl font-Hubballi text-indigo-700'>Aperture</h1>
        </div>
        <div className='flex mt-3 w-full'>
          <SearchBar />
        </div>
        <div className='flex items-center p-1 mt-2'>
          <span className="font-Hubballi text-xl">Signin</span>
        </div>
        <div className='flex items-center p-1 mt-2'>
          <span className="font-Hubballi text-xl">Cart</span>
        </div>
      </nav>
      <nav className='ml-11 bg-slate-200 mr-11'>
        <ul className='flex flex-row p-2'>
          <li className='p-1 font-Hubballi text-xl'>Shop</li>
          <li className='p-1 font-Hubballi text-xl'>Category</li>
          <li className='p-1 font-Hubballi text-xl'>Brands</li>
        </ul>
      </nav>
      <HomePage />
    </div>
  );
}

export default App;
