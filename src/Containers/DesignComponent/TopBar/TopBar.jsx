import React, { useContext } from 'react';
import './TopBar.scss';
import { Icons } from '../../../Utils/Icons';
import { sideBarContext } from '../../Home/Home.jsx';
import { downloadCanvas } from '../../../Library/Download';
// import { Tooltip } from 'reactstrap';

const TopBar = () => {
  const showSideBar = useContext(sideBarContext);
  return (
    <>
      <div className='top-bar'>
        <div
          id='toggle-side-bar'
          onClick={() => {
            showSideBar();
          }}
        >
          <img alt='nav-icon' src={Icons.addPhotosIcon} />
        </div>
        {/* <Tooltip
          placement='right'
          isOpen={this.state.tooltipOpen}
          target='toggle-side-bar'
          toggle={this.toggle}
        >
          Tooltip
        </Tooltip> */}
        {/* export */}
        <div
          className='top-bar-options'
          onClick={() => {
            downloadCanvas('viewport', 'test.png');
          }}
        >
          <img alt='nav-icon' src={Icons.addPhotosIcon} />
        </div>
      </div>
    </>
  );
};

export default TopBar;
