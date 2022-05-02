import "./ImageCrop.scss";
import React, { useState } from "react";
import Select from "react-select";
import Portrait from "./Portrait/Portrait";
import Landscape from "./Landscape/Landscape";

const ImageCrop = (props) => {
  const { cropImage, selectedCrop, handleChange } = props;

  const cropType = [
    { label: "Portrait", value: "Portrait" },
    { label: "Landscape", value: "Landscape" },
  ];

  return (
    <div className="select-block">
      <Select
        className="dropdown"
        options={cropType}
        placeholder={"Portrait"}
        onChange={handleChange}
      />{" "}
      {selectedCrop == "Portrait" ? (
        <Portrait cropImage={cropImage} />
      ) : (
        <Landscape cropImage={cropImage} />
      )}
    </div>
  );
};

export default ImageCrop;
