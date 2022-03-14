import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => (
  <div className='w-1/2 mb-4'>
    <h1 className='font-Hubballi text-xl ml-1'>{title.toUpperCase()}</h1>
    <div className='flex justify-center'>
      {items
        .filter((item, idx) => idx < 2)
        .map(({ id, ...props }) => (
          <CollectionItem key={id} {...props} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
