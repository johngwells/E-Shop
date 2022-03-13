import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, subtitle, imageUrl, history, linkUrl, match }) => (
  <div
    className='w-3/6 h-80 p-3'
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className='flex justify-center items-center h-72 rounded-lg overflow-hidden relative group'>
      <img
        src={imageUrl}
        className='object-contain absolute z-10 opacity-90 hover:scale-105 transition duration-700 ease-in-out group-hover:opacity-100'
      />
      <div className='rounded-lg w-32 h-20 flex justify-center items-center flex-col relative z-20 bg-slate-200 opacity-70 group-hover:opacity-100 transition duration-300 cursor-pointer'>
        <span className='text-4xl font-Hubballi'>{title}</span>
        <span className='text-2xl italic font-Hubballi'>{subtitle}</span>
      </div>
    </div>
  </div>
);

export default withRouter(MenuItem);
