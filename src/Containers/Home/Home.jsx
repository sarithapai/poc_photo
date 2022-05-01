import React, { useContext } from 'react';
import ProgressIndicator from '../../Components/ProgressIndicator';
import DesignComponent from '../DesignComponent/DesignComponent.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import './Home.css';
import { useState, createContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import {
  FILE_UPLOAD_PROGRESS,
  PAGE_EDIT_PHOTO,
  PAGE_FRAME_SELECTION,
  PAGE_SIZE_SELECTION,
  PROCESSING,
} from '../../Utils/Constants';
import Export from '../Export/Export';

export const sideBarContext = createContext();

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [image, setImage] = useState(null);
  const { isUploading, uploadProgressValue, isLoading, activePageIndex } =
    useContext(GlobalContext);

  const toggleSideBar = () => {
    setShowSideBar((SideBar) => !SideBar);
  };

  const updateImage = (image) => {
    setImage(image);
  };

  return (
    <>
      {isUploading === true && uploadProgressValue !== 100 ? (
        <ProgressIndicator
          showLabel
          value={uploadProgressValue}
          label={FILE_UPLOAD_PROGRESS}
        />
      ) : null}

      {isLoading === true ? <ProgressIndicator label={PROCESSING} /> : null}

      {activePageIndex == PAGE_EDIT_PHOTO ? (
        <div className='main-wrapper'>
          <SideBar showSideBar={showSideBar} updateImage={updateImage} />
          <sideBarContext.Provider value={toggleSideBar}>
            <DesignComponent image={image} />
          </sideBarContext.Provider>
        </div>
      ) : activePageIndex == PAGE_SIZE_SELECTION ||
        activePageIndex == PAGE_FRAME_SELECTION ? (
        <Export />
      ) : null}
    </>
  );
};

export default Home;
