import React, { useEffect, useState } from 'react';
import './DesignComponent.scss';
// import { Icons } from '../../Utils/Icons';
import { fabric } from 'fabric';
import TopBar from './TopBar/TopBar.jsx';
import ToolBar from './ToolBar/ToolBar.jsx';
// import { downloadCanvas } from '../../Library/Download';

const DesignComponent = (props) => {
  const { image } = props;
  const [canvas, setCanvas] = useState(null);

  console.log('image', image);

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  useEffect(() => {
    if (image != null) {
      const image_path = image.image_path;
      // const image_path =
      //   'https://d3mx9szhm1i4e3.cloudfront.net/user_photos/images/180499/original/c6dd0286-a971-f96a-25ce-db90aaeafd8e_IMG_20220411_11381720220421-29787-1h47el0-0_1650534293.png?1650534293';

      new fabric.Image.fromURL(
        image_path,
        function (myImg) {
          var designWrapper = document.getElementById('design-wrapper');
          var canvasWrapper = document.getElementById('canvas-wrapper');

          var designWrapperWidth = designWrapper.clientWidth;

          let imgWidth = myImg.width;
          let imgHeight = myImg.height;
          let aspectRatio = imgHeight / imgWidth;
          let canvasWidth = designWrapperWidth;

          let canvasHeight = designWrapperWidth * aspectRatio;
          var scaleFactor = canvasWidth / imgWidth;
          var img1 = myImg.set({
            left: 0,
            top: 0,
            originX: 'left',
            originY: 'top',
            width: imgWidth,
            height: imgHeight,
            scaleX: scaleFactor,
            scaleY: scaleFactor,
          });

          canvas.setWidth(canvasWidth);
          canvas.setHeight(canvasHeight);
          canvasWrapper.style.width = `${canvasWidth}px`;
          canvasWrapper.style.height = `${canvasHeight}px`;
          canvas.add(img1);
          canvas.renderAll();
        },
        { crossOrigin: 'Anonymous' }
      );
    }
  }, [canvas, image]);

  const initCanvas = () =>
    new fabric.Canvas('viewport', {
      preserveObjectStacking: true,
      backgroundColor: '#ffffff',
      includeDefaultValues: true
    });

  const flip = () => {
    console.log('flipping');
    var objs = canvas.getObjects();
    objs.forEach(function (obj) {
      obj.toggle('flipX');
      canvas.renderAll();
    });
  };

  return (
    <div id='design-wrapper'>
      <TopBar />

      <div className='canvas-wrapper' id='canvas-wrapper'>
        {' '}
        <canvas
          id='viewport'
          className='canvas'
          crossorigin='anonymous'
        ></canvas>
      </div>

      <ToolBar flipImage={flip} />
    </div>
  );
};

export default DesignComponent;

//
