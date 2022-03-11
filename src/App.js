import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage';
import Footer from './pages/footer/footer';

// temporary for testing
const FujifilmPage = () => (
  <div>
    <h1>Fujifilm page</h1>
  </div>
)

function App() {
  return (
    <div className='p-2'>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/fujifilm' component={FujifilmPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
