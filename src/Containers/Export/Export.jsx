import './Export.scss';
import Preview from './Preview/Preview.jsx';
import Frame from './Frame/Frame.jsx';

const Export = () => {
  return (
    <>
      <div className='export-wrapper'>
        <Frame />
        <Preview />
      </div>
    </>
  );
};

export default Export;
