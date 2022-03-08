import HomePage from './components/HomePage';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className='p-2'>
      <nav className='border mb-4 flex flex-row'>
        <div className='w-2/5'>
          <h1 className='text-5xl font-Hubballi'>Aperture</h1>
        </div>
        <div className='flex items-center p-1 ml-16'>
          <SearchBar />
        </div>
      </nav>
      <nav className='border mb-4'>
        <ul className='flex flex-row p-2'>
          <li className='p-1'>Shop</li>
          <li className='p-1'>Categories</li>
          <li className='p-1'>Contact</li>
        </ul>
      </nav>
      <HomePage />
    </div>
  );
}

export default App;
