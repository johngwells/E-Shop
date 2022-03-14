import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage';
import Footer from './pages/footer/footer';
import ShopPage from './pages/shop/shop-page';
import Navigation from './pages/navigation/Navigation';
import SignIn from './pages/sign-in/sign-in';

function App() {
  return (
    <div className='p-2'>
      <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignIn} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
