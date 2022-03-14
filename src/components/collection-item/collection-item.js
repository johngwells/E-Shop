const CollectionItem = ({ name, imageUrl, price }) => (
  <div className='group relative -mt-4 flex h-72 w-full flex-col justify-center p-1'>
    <img
      src={imageUrl}
      className='h-auto max-h-60 w-auto overflow-hidden rounded-sm'
    />
    <div className='flex flex-row justify-around'>
      <span className='w-11/12 p-1 font-Hubballi'>{name}</span>
      <span className='p-1 font-Hubballi'>${price}</span>
    </div>
    <div>
      <div className='invisible absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:visible'>
        <button className='btn btn-active h-8 w-32 rounded-md px-0 opacity-90 hover:opacity-100'>
          Add to cart
        </button>
      </div>
    </div>
  </div>
);

export default CollectionItem;
