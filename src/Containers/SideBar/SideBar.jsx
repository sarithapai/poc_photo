import React, { useState } from 'react';
import './SideBar.css';
import { uploadPhoto } from '../../Library/UploadApi';
import { Icons } from '../../Utils/Icons';

const SideBar = props => {
  const { showSideBar, updateImage } = props;
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = async file => {
    let result = await uploadPhoto(file);

    if (result.image_path) {
      updateImage(result);
    }
  };

  return (
    <div
      className={
        showSideBar
          ? 'side-bar-wrapper show-side-bar'
          : 'side-bar-wrapper hide-side-bar'
      }
      // className='side-bar-wrapper'
    >
      <div className='add-photos'>
        <label>
          <img alt='Add Photos' src={Icons.addPhotosIcon} />
          <input
            type='file'
            onChange={e => {
              setSelectedFile(e.target.files[0]);
              uploadFile(e.target.files[0]);
            }}
            style={{ display: 'none' }}
          />
          <span>Add Photos</span>
        </label>
      </div>
      <div>
        file:
        {selectedFile === null ? 'no files selected' : selectedFile.name}
      </div>
    </div>
  );
};

export default SideBar;
