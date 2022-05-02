import { useContext } from 'react';
import './TopBar.scss';
import { Icons } from '../../../Utils/Icons';
import { GlobalContext } from '../../../Context/GlobalState';
import {
  PAGE_FRAME_SELECTION,
  PAGE_SIZE_SELECTION,
  PAGE_EDIT_PHOTO,
  CHOOSE_FRAME_OPTION,
  CHOOSE_IMAGE_SIZE
} from '../../../Utils/Constants';

const TopBar = () => {
  const { activePageIndex, setActivePageIndex } = useContext(GlobalContext);

  const previousPageHandler = () => {
    if (activePageIndex == PAGE_SIZE_SELECTION) {
      setActivePageIndex(PAGE_EDIT_PHOTO);
    } else {
      setActivePageIndex(activePageIndex - 1);
    }
  };
  return (
    <div className='top-bar-wrapper'>
      <div className='nav-button'>
        <div onClick={() => previousPageHandler()}>
          <img src={Icons.back} alt='' />
        </div>
        <div onClick={() => setActivePageIndex(PAGE_EDIT_PHOTO)}>Home</div>
      </div>
      <div className='title-bar '>
        {activePageIndex == PAGE_SIZE_SELECTION
          ? CHOOSE_IMAGE_SIZE
          : activePageIndex == PAGE_FRAME_SELECTION
          ? CHOOSE_FRAME_OPTION
          : null}
      </div>
    </div>
  );
};

export default TopBar;
