const getCanvasViewSize = (windowWidth, windowHeight, model) => {
  const modelRatio = model.height / model.width;
  const windowRatio = windowHeight / windowWidth;
  let scaleWidth;
  let scaleHeight;

  if (windowRatio < modelRatio) {
    scaleHeight = windowHeight;
    scaleWidth = scaleHeight / modelRatio;
  } else {
    scaleWidth = windowWidth;
    scaleHeight = scaleWidth * modelRatio;
  }
  return {
    width: scaleWidth,
    height: scaleHeight,
  };
};

export const getCanvasSize = (
  windowWidth,
  windowHeight,
  model,
  inSceneElement
) => {
  const canvasViewSize = getCanvasViewSize(windowWidth, windowHeight, model);
  let imgWidth = inSceneElement.width;
  let imgHeight = inSceneElement.height;

  let canvasWidth, canvasHeight, aspectRatio;

  if (imgWidth > imgHeight) {
    aspectRatio = imgHeight / imgWidth;
    canvasWidth = canvasViewSize.width;
    canvasHeight = canvasWidth * aspectRatio;
  } else {
    aspectRatio = imgWidth / imgHeight;
    canvasHeight = canvasViewSize.height;
    canvasWidth = canvasHeight * aspectRatio;
  }
  return { width: canvasWidth, height: canvasHeight };
};

export const getSceneScaleFactor = (
  windowWidth,
  windowHeight,
  model,
  inSceneElement
) => {
  const canvasSize = getCanvasSize(
    windowWidth,
    windowHeight,
    model,
    inSceneElement
  );
  return canvasSize.width / inSceneElement.width;
};

/*

export const windowDidResize = (inCanvas, inProjectWidth, inProjectHeight) => {
  var designWrapper = document.getElementById('design-wrapper');

  const canvasViewSize = getCanvasSize(
    designWrapper.clientWidth,
    designWrapper.clientHeight - 40,
    { width: inProjectWidth, height: inProjectHeight }
  );
  canvasIsResized(inCanvas, canvasViewSize, {
    width: inProjectWidth,
    height: inProjectHeight,
  });
};

export const canvasIsResized = (inCanvas, inCanvasViewSize, inProjectSize) => {
  if (!inCanvas) {
    return;
  }
  const canvasOldWidth = inCanvas.width;
  const canvasOldHeight = inCanvas.height;
  inCanvas.setHeight(inCanvasViewSize.width);
  inCanvas.setWidth(inCanvasViewSize.height);
  inCanvas.forEachObject((element) => {
    const originalViewScale = sceneScaleFactor(
      element,
      inCanvasViewSize,
      inProjectSize
    );

    const elementOldCenterX = -element.left + canvasOldWidth / 2;
    const elementOldCenterY = -element.top + canvasOldHeight / 2;
    const ratioX = elementOldCenterX / element.getScaledWidth();
    const ratioY = elementOldCenterY / element.getScaledHeight();

    element.scale(originalViewScale);
    element.setCoords();

    const elementNewCenterX = ratioX * element.getScaledWidth();
    const elementNewCenterY = ratioY * element.getScaledHeight();
    let newLeft = -(elementNewCenterX - inCanvas.width / 2);
    let newTop = -(elementNewCenterY - inCanvas.height / 2);

    const newEndX = newLeft + element.getScaledWidth();
    const newEndY = newTop + element.getScaledHeight();

    if (newEndX < inCanvas.width) {
      newLeft += inCanvas.width - newEndX;
    } else if (newLeft > 0) {
      newLeft = 0;
    }

    if (newEndY < inCanvas.height) {
      newTop += inCanvas.height - newEndY;
    } else if (newTop > 0) {
      newTop = 0;
    }

    element.top = newTop;
    element.left = newLeft;
    element.setCoords();
  });
  inCanvas.renderAll();
};

export const sceneScaleFactor = (inElement, inCanvasSize, inProjectSize) => {
  let viewScale = 1;
  const elementWidth = inElement.width;
  const elementHeight = inElement.height;

  const projectHeightScale = inProjectSize.height / inCanvasSize.height;
  const newCanvasWidth = inCanvasSize.width / projectHeightScale;

  if (newCanvasWidth > inCanvasSize.height) {
    const widthScale = newCanvasWidth / elementWidth;
    viewScale = widthScale;
    const newHeight = elementHeight * viewScale;
    if (newHeight < inCanvasSize.height) {
      viewScale *= inCanvasSize.height / newHeight;
    }
  } else {
    const heightScale = inCanvasSize.height / elementHeight;
    viewScale = heightScale;
    const newWidth = elementWidth * viewScale;
    if (newWidth < newCanvasWidth) {
      viewScale *= newCanvasWidth / newWidth;
    }
  }
  return viewScale;
};
*/
