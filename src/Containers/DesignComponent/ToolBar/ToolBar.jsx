import React from 'react';
import './ToolBar.scss';
import { Icons } from '../../../Utils/Icons';
import { CROP, FLIP } from '../../../Utils/Constants';

const ToolBar = (props) => {
  const { flipImage } = props;
  const tools = [
    {
      name: CROP,
      alt_text: 'Crop',
      // tab_id: TAB_KEY,
      img_url: Icons.crop,
    },
    {
      name: FLIP,
      alt_text: 'FLIP',
      // tab_id: TAB_KEY,
      img_url: Icons.flip,
    },
  ];
  const handleClick = (option) => {
    if (option.name === FLIP) {
      flipImage();
    }
  };
  return (
    <div className='tool-bar'>
      {tools.map((option) => (
        // <div key={option.alt_text}> {option.name}</div>
        <div key={option.alt_text} onClick={() => handleClick(option)}>
          <img className='icon' alt={option.alt_text} src={option.img_url} />
        </div>
      ))}
    </div>
  );
};

export default ToolBar;
