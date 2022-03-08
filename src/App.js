import HomePage from './pages/homepage/Homepage';
import SearchBar from './components/searchbar/SearchBar';

function App() {
  return (
    <div className='p-2'>
      <nav className='border mb-4 flex flex-row'>
        <div className='w-full border border-solid'>
          <h1 className='text-5xl font-Hubballi text-indigo-700'>Aperture</h1>
        </div>
        <div className='flex items-center p-1 w-full border border-solid'>
          <SearchBar />
        </div>
        <div className='flex items-center border border-solid p-1'>
          <span className="font-Hubballi text-2xl">Signin</span>
        </div>
        <div className='flex items-center border border-solid'>
          <span className="font-Hubballi text-2xl">Cart</span>
        </div>
      </nav>
      <nav className='border mb-4'>
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
