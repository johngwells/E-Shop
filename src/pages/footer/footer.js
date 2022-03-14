const Footer = () => {
  return (
    <div className='h-48 bg-slate-800'>
      <div className='flex w-full flex-row justify-center'>
        <img className='h-40 w-40' src='static/apple-app-store.svg' />
        <img className='h-40 w-40' src='static/google-play-store.svg' />
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col-reverse'>
          <span className='font-Hubballi text-lg text-slate-200'>
            made with <span className='text-rose-600'>♥</span> by John Wells
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
