import './Export.scss';
import Preview from './Preview/Preview.jsx';
import SideBar from './SideBar/SideBar.jsx';

const Export = () => {
  return (
    <>
      <div className='export-wrapper'>
        <SideBar />
        <Preview />
      </div>
    </>
  );
};

export default Export;
