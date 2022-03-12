const CollectionPreview = ({ title, items }) => (
  <div className='p-4 w-1/2 border'>
    <div className='w-full border'>
      <h1 className='font-Hubballi text-xl'>{title.toUpperCase()}</h1>
      <div className='flex justify-center border'>
        {items
          .filter((item, idx) => idx < 2)
          .map(item => (
            <div
              key={item.id}
              className='mt-4 p-1 w-full h-60 flex flex-col justify-center'
            >
              <span className='font-Hubballi'>{item.name}</span>
              <img src={item.imageUrl} className='w-full h-auto' />
              <span className='font-Hubballi'>${item.price}</span>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default CollectionPreview;
