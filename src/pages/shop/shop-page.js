import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from '../../data/shop-data';

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
      <div className='flex justify-center -mt-1'>
        <div className='flex flex-wrap mb-32 p-5'>
          {collections.map(({ id, ...props }) => (
            <CollectionPreview key={id} {...props} />
          ))}
        </div>
      </div>
    );
  }
}

export default ShopPage;
