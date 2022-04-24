import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage';
import Footer from './pages/footer/footer';
import ShopPage from './pages/shop/shop-page';
import Navigation from './pages/navigation/Navigation';
import SignIn from './pages/sign-in/sign-in';

function App() {
  return (
    <div className='p-2'>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
