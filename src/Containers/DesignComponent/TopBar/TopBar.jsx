import React, { useContext } from 'react';
import './TopBar.scss';
import { Icons } from '../../../Utils/Icons';
import { sideBarContext } from '../../Home/Home.jsx';
import { GlobalContext } from '../../../Context/GlobalState';
import { PAGE_SIZE_SELECTION } from '../../../Utils/Constants';
// import { Tooltip } from 'reactstrap';

const TopBar = () => {
  const showSideBar = useContext(sideBarContext);
  const { setActivePageIndex, setPreview } = useContext(GlobalContext);

  return (
    <>
      <div className='top-bar'>
        <div
          id='toggle-side-bar'
          onClick={() => {
            showSideBar();
          }}
        >
          <img className='icon' alt='nav-icon' src={Icons.navigation} />
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
            // downloadCanvas('viewport', 'test.png');
            const previewData = document.getElementById('viewport').toDataURL();
            setPreview(previewData);
            setActivePageIndex(PAGE_SIZE_SELECTION);
          }}
        >
          <img className='icon' alt='nav-icon' src={Icons.shareIcon} />
        </div>
      </div>
    </>
  );
};

export default TopBar;
