import React, { useEffect } from 'react';
import './DesignComponent.scss';
// import { Icons } from '../../Utils/Icons';
import { fabric } from 'fabric';
import TopBar from './TopBar/TopBar.jsx';
import ToolBar from './ToolBar/ToolBar.jsx';
// import { downloadCanvas } from '../../Library/Download';

const DesignComponent = props => {
  const { image } = props;
  console.log('image', image);
  useEffect(() => {
    const canvas = new fabric.Canvas('viewport', {
      preserveObjectStacking: true,
      backgroundColor: '#ffffff',
      includeDefaultValues: true
    });

    if (image != null) {
      const image_path = image.image_path;
      // const image_path =
      //   'https://d3mx9szhm1i4e3.cloudfront.net/user_photos/images/180499/original/c6dd0286-a971-f96a-25ce-db90aaeafd8e_IMG_20220411_11381720220421-29787-1h47el0-0_1650534293.png?1650534293';

      new fabric.Image.fromURL(image_path, function (myImg) {
        console.log('image details:', myImg);

        var canvasWrapper = document.getElementById('canvas-wrapper');
        var canvasWrapperWidth = canvasWrapper.clientWidth;

        let imgWidth = myImg.width;
        let imgHeight = myImg.height;
        let aspectRatio = imgHeight / imgWidth;
        let canvasWidth = canvasWrapperWidth;

        let canvasHeight = canvasWrapperWidth * aspectRatio;
        var scaleFactor = canvasWidth / imgWidth;
        var img1 = myImg.set({
          left: 0,
          top: 0,
          originX: 'left',
          originY: 'top',
          width: imgWidth,
          height: imgHeight,
          scaleX: scaleFactor,
          scaleY: scaleFactor
        });
        // img1.setAttribute('crossorigin', 'anonymous');
        canvas.setWidth(canvasWidth);
        canvas.setHeight(canvasHeight);
        canvas.add(img1);
      });
    }
  });

  return (
    <div className='design-wrapper'>
      <TopBar />

      <div className='canvas-wrapper' id='canvas-wrapper'>
        {' '}
        <canvas
          id='viewport'
          className='canvas'
          crossorigin='anonymous'
        ></canvas>
      </div>

      <ToolBar />
    </div>
  );
};

export default DesignComponent;

//
