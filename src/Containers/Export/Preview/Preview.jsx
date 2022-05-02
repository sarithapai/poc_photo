import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../Context/GlobalState';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/src/ReactCrop.scss';
import './Preview.scss';

const Preview = () => {
  const { preview } = useContext(GlobalContext);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 300,
    aspect: 16 / 9,
  });

  const onCropChange = (inCrop) => {
    setCrop(inCrop);
  };

  return (
    <div className='preview-wrapper'>
      <ReactCrop crop={crop} onChange={onCropChange}>
        <img src={preview}></img>
      </ReactCrop>
    </div>
  );
};

export default Preview;
