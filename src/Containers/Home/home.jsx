import React from 'react';
import DesignComponent from '../DesignComponent/DesignComponent.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import './home.css';
// import { useState } from 'react';

const Home = () => {
  // const [showSideBar, setShowSideBar] = useState(true);'main-wrapper'
  const showSideBar = true;
  return (
    <div
      className={
        showSideBar
          ? 'main-wrapper show-side-bar'
          : 'main-wrapper hide-side-bar'
      }
    >
      <SideBar />
      {/* showSideBar = {{ showSideBar }} */}
      <DesignComponent />
    </div>
  );
};

export default Home;
