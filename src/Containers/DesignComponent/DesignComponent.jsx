import React from 'react';
import './DesignComponent.css';
import TopBar from './TopBar/TopBar.jsx';
import ToolBar from './ToolBar/ToolBar.jsx';

const DesignComponent = () => {
  return (
    <div className='design-wrapper'>
      <TopBar />
      <div className=''>This is Canvas</div>
      <ToolBar />
    </div>
  );
};

export default DesignComponent;
