import React, { useContext } from 'react';
import ProgressIndicator from '../../Components/ProgressIndicator';
import DesignComponent from '../DesignComponent/DesignComponent.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import './Home.css';
import { useState, createContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import { FILE_UPLOAD_PROGRESS, PROCESSING } from '../../Utils/Constants';
export const sideBarContext = createContext();

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [image, setImage] = useState(null);
  const { isUploading, uploadProgressValue, isLoading } =
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

      <div className='main-wrapper'>
        <SideBar showSideBar={showSideBar} updateImage={updateImage} />
        <sideBarContext.Provider value={toggleSideBar}>
          <DesignComponent image={image} />
        </sideBarContext.Provider>
      </div>
    </>
  );
};

export default Home;
