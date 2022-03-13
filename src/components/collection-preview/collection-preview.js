import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => (
  <div className='p-4 w-1/2 mb-6'>
    <div className='w-full'>
      <h1 className='font-Hubballi text-xl'>{title.toUpperCase()}</h1>
      <div className='flex justify-center'>
        {items
          .filter((item, idx) => idx < 2)
          .map(({ id, ...props }) => (
            <CollectionItem key={id} {...props} />
          ))}
      </div>
    </div>
  </div>
);

export default CollectionPreview;
