const Footer = () => {
  return (
    <div className='bg-slate-800 h-48'>
      <div className='flex flex-row justify-center w-full'>
        <img className='h-40 w-40' src='static/apple-app-store.svg' />
        <img className='h-40 w-40' src='static/google-play-store.svg' />
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col-reverse'>
          <span className='text-slate-200 font-Hubballi text-lg'>
            made with <span className='text-rose-600'>♥</span> by John Wells
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
