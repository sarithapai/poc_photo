import React from 'react';
import './ToolBar.scss';
import { Icons } from '../../../Utils/Icons';
import { CROP, FLIP } from '../../../Utils/Constants';

const ToolBar = () => {
  const tools = [
    {
      name: CROP,
      alt_text: 'Crop',
      // tab_id: TAB_KEY,
      img_url: Icons.addPhotosIcon
    },
    {
      name: FLIP,
      alt_text: 'FLIP',
      // tab_id: TAB_KEY,
      img_url: Icons.addPhotosIcon
    }
  ];
  return (
    <div className='tool-bar'>
      {tools.map(option => (
        // <div key={option.alt_text}> {option.name}</div>
        <img key={option.alt_text} alt={option.alt_text} src={option.img_url} />
      ))}
    </div>
  );
};

export default ToolBar;
