import { withRouter } from '../../utils/withRouter';

const MenuItem = ({ title, subtitle, imageUrl, history, linkUrl, match }) => (
  <div
    className='-mb-2 h-80 w-3/6 p-1'
    // onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div className='group relative flex h-72 items-center justify-center overflow-hidden rounded-sm'>
      <img
        src={imageUrl}
        className='absolute z-10 object-contain opacity-90 transition duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100'
        alt={title}
      />
      <div className='btn glass relative z-20 flex h-20 w-40 cursor-pointer flex-col items-center justify-center rounded-md text-neutral-content transition duration-600 hover:bg-opacity-90'>
        <span className='font-Hubballi text-4xl'>{title}</span>
        <span className='font-Hubballi text-2xl italic'>{subtitle}</span>
      </div>
    </div>
  </div>
);

export default withRouter(MenuItem);
