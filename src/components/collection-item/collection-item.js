const CollectionItem = ({ name, imageUrl, price }) => (
  <div className='mt-4 p-1 w-full h-60 flex flex-col justify-center relative'>
    <img src={imageUrl} className='w-full h-auto' />
    <div className="flex flex-row justify-around">
      <span className='font-Hubballi p-1 w-11/12'>{name}</span>
      <span className='font-Hubballi p-1'>${price}</span>
    </div>
    <button className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-200 opacity-70 rounded-md w-24 h-8'>Add to cart</button>
  </div>
);

export default CollectionItem;
