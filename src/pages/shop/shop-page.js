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
      <div className='h-screen'>
      <Navigation />
        {
          collections.map(({ id, ...props }) => (
            <CollectionPreview key={id} {...props} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage;
