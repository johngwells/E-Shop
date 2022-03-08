const MenuItem = ({ title, subtitle, imageUrl }) => (
  <div className='border w-3/6 h-80 p-3.5'>
    <div className='border flex justify-center items-center h-72 overflow-hidden relative'>
      <img src={imageUrl} className='object-contain absolute z-10' />
      <div className='border border-gray-600 rounded-lg w-36 h-24 flex justify-center items-center flex-col relative z-20 bg-violet-100'>
        <span className='text-4xl font-Hubballi'>{title}</span>
        <span className='text-2xl italic font-Hubballi'>{subtitle}</span>
      </div>
    </div>
  </div>
);

export default MenuItem;
