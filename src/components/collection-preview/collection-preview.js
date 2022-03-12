const CollectionPreview = ({ title, items }) => (
  <div className='p-4 w-1/2 mb-6'>
    <div className='w-full'>
      <h1 className='font-Hubballi text-xl'>{title.toUpperCase()}</h1>
      <div className='flex justify-center'>
        {items
          .filter((item, idx) => idx < 2)
          .map(item => (
            <div
              key={item.id}
              className='mt-4 p-1 w-full h-60 flex flex-col justify-center'
            >
              <span className='font-Hubballi p-1'>{item.name}</span>
              <img src={item.imageUrl} className='w-full h-auto' />
              <span className='font-Hubballi p-1'>${item.price}</span>
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default CollectionPreview;
