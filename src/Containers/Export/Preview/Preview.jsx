import React, { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import ReactCrop from "react-image-crop";
import "react-image-crop/src/ReactCrop.scss";
import "./Preview.scss";
import {
  FRAMED,
  PAGE_SIZE_SELECTION,
  PAGE_FRAME_SELECTION,
} from "../../../Utils/Constants";

const Preview = (props) => {
  const {
    preview,
    activePageIndex,
    frameColor,
    frameMatting,
    selectedFrameType,
  } = useContext(GlobalContext);

  const [crop, setCrop] = useState({
    unit: "%",
    width: 50,
    height: 100,
  });

  const { cropDimensions } = props;
  const oldCropDimension = useRef(cropDimensions).current;

  const onCropChange = (inCrop) => {
    setCrop(inCrop);
  };

  useEffect(() => {
    if (
      cropDimensions[0] != oldCropDimension.width ||
      cropDimensions[1] != oldCropDimension.height
    ) {
      const newCropDimension = {
        unit: "%",
        width: cropDimensions[0],
        height: cropDimensions[1],
      };
      setCrop(newCropDimension);
    }
  }, [cropDimensions]);

  return (
    <div className="preview-wrapper">
      {activePageIndex === PAGE_SIZE_SELECTION ? (
        <ReactCrop crop={crop} onChange={onCropChange}>
          <img className="preview-image" src={preview} alt=""></img>
        </ReactCrop>
      ) : activePageIndex === PAGE_FRAME_SELECTION ? (
        selectedFrameType === FRAMED ? (
          <div
            className="frame"
            style={{
              border: "18px solid " + frameColor,
              padding: frameMatting + "px",
            }}
          >
            <img
              id="preview-image"
              alt=""
              className={"preview-image"}
              src={preview}
            />
          </div>
        ) : (
          <img
            id="preview-image"
            alt=""
            className={"preview-image"}
            src={preview}
          />
        )
      ) : null}
    </div>
  );
};

export default Preview;
