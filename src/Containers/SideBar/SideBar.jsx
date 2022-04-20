import React, { useState } from 'react';
import './SideBar.css';
import { uploadPhoto } from '../../Library/UploadApi';
import { Icons } from '../../Utils/Icons';

const SideBar = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = (file) => {
    console.log('uploadFile');
    uploadPhoto(file);
  };

  return (
    <div className='side-bar-wrapper'>
      <div className='add-photos'>
        <label>
          <img alt='Add Photos' src={Icons.addPhotosIcon} />
          <input
            type='file'
            onChange={(e) => {
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
