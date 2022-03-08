const MenuItem = ({ title, subtitle, imageUrl }) => (
  <div className='w-3/6 h-80 p-3'>
    <div className='flex justify-center items-center h-72 rounded-lg overflow-hidden relative'>
      <img src={imageUrl} className='object-contain absolute z-10' />
      <div className='rounded-lg w-36 h-24 flex justify-center items-center flex-col relative z-20 bg-slate-200 opacity-70'>
        <span className='text-4xl font-Hubballi'>{title}</span>
        <span className='text-2xl italic font-Hubballi'>{subtitle}</span>
      </div>
    </div>
  </div>
);

export default MenuItem;
