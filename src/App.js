import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage';
import Footer from './pages/footer/footer';
import ShopPage from './pages/shop/shop-page';

function App() {
  return (
    <div className='p-2'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
