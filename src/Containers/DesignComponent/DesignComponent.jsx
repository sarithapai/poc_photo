import React, { useEffect, useState, useContext } from 'react';
import './DesignComponent.scss';
import { fabric } from 'fabric';
import TopBar from './TopBar/TopBar.jsx';
import ToolBar from './ToolBar/ToolBar.jsx';
import { GlobalContext } from '../../Context/GlobalState';
import { getCanvasSize, getSceneScaleFactor } from '../../Library/SizeApi';

const DesignComponent = (props) => {
  const { image } = props;
  const [canvas, setCanvas] = useState(null);
  const { updateIsLoading, projectWidth, projectHeight } =
    useContext(GlobalContext);

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  useEffect(() => {
    if (image != null) {
      const image_path = image.image_path;

      new fabric.Image.fromURL(
        image_path,
        function (myImg) {
          var designWrapper = document.getElementById('design-wrapper');
          var canvasWrapper = document.getElementById('canvas-wrapper');

          const canvasSize = getCanvasSize(
            designWrapper.clientWidth,
            designWrapper.clientHeight - 40,
            { width: projectWidth, height: projectHeight },
            myImg
          );
          let scaleFactor = getSceneScaleFactor(
            designWrapper.clientWidth,
            designWrapper.clientHeight - 40,
            { width: projectWidth, height: projectHeight },
            myImg
          );

          var img1 = myImg.set({
            left: 0,
            top: 0,
            originX: 'left',
            originY: 'top',
            width: myImg.width,
            height: myImg.height,
            scaleX: scaleFactor,
            scaleY: scaleFactor,
          });

          canvas.setWidth(canvasSize.width);
          canvas.setHeight(canvasSize.height);
          canvasWrapper.style.width = `${canvasSize.width}px`;
          canvasWrapper.style.height = `${canvasSize.height}px`;
          canvas.add(img1);
          canvas.renderAll();
          updateIsLoading(false);
        },
        { crossOrigin: 'Anonymous' }
      );
    }
  }, [canvas, image]);

  const initCanvas = () =>
    new fabric.Canvas('viewport', {
      preserveObjectStacking: true,
      backgroundColor: '#ffffff',
      includeDefaultValues: true,
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
    <div id='design-component-wrapper'>
      <TopBar />
      <div id='design-wrapper'>
        <div className='canvas-wrapper' id='canvas-wrapper'>
          {' '}
          <canvas id='viewport' className='canvas'></canvas>
        </div>
      </div>

      <ToolBar flipImage={flip} />
    </div>
  );
};

export default DesignComponent;
