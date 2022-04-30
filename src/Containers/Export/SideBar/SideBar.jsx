import './SideBar.scss';
import ImageCrop from './ImageCrop/ImageCrop';
import Frame from './Frame/Frame.jsx';

const SideBar = (props) => {
  const { cropImage, selectedIcon } = props;
  return (
    <>
      <div className='SideBar-wrapper'>
        {/* Either of the  Components ImageCrop or Frame should be shown at a time.
        Comment or uncomment the required Component accordingly.*/}
        <ImageCrop cropImage={cropImage} selectedIcon={selectedIcon} />
        {/* <Frame /> */}
      </div>
    </>
  );
};

export default SideBar;
