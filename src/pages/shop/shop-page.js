import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from '../../data/shop-data';
import Navigation from '../navigation/Navigation';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <>
        <Navigation />
        <div className='flex justify-center mt-10'>
          <div className='flex flex-wrap w-11/12 mb-28'>
            {collections.map(({ id, ...props }) => (
              <CollectionPreview key={id} {...props} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ShopPage;
