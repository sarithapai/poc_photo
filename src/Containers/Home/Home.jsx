import React from 'react';
import DesignComponent from '../DesignComponent/DesignComponent.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import './Home.css';
import { useState, createContext } from 'react';

export const sideBarContext = createContext();

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [image, setImage] = useState(null);

  const toggleSideBar = () => {
    setShowSideBar((SideBar) => !SideBar);
  };

  const updateImage = (image) => {
    console.log('updating thr image');
    setImage(image);
  };

  return (
    <>
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
