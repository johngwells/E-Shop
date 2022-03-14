import CollectionItem from '../collection-item/collection-item';

const CollectionPreview = ({ title, items }) => (
  <div className='mb-4 w-1/2'>
    <h1 className='ml-1 font-Hubballi text-xl'>{title.toUpperCase()}</h1>
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
