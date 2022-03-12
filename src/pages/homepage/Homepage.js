import Directory from '../../components/directory/directory';
import Navigation from '../navigation/Navigation';

const Homepage = () => {
  return (
    <div className='h-screen'>
      <Navigation />
      <Directory />
    </div>
  );
};

export default Homepage;
