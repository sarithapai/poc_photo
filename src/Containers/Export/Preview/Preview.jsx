import React, { PureComponent } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/src/ReactCrop.scss";

import "./Preview.scss";
class Preview extends PureComponent {
  state = {
    src: "https://i.picsum.photos/id/212/700/700.jpg?hmac=GrEX7n4bVOZt4IjO2_WLLcoiQvPMQT7Sb8QfuXBjKoA",
    crop: {
      unit: "%",
      width: 300,
      aspect: 16 / 9,
    },
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  render() {
    const { crop, src } = this.state;
    console.log(crop);
    return (
      <div className="preview-wrapper">
        {/* <div style={{ position: "absolute" }}> */}
        {/* <img
            className={"image-preview " + this.props.setCropClass}
            src="https://i.picsum.photos/id/212/700/700.jpg?hmac=GrEX7n4bVOZt4IjO2_WLLcoiQvPMQT7Sb8QfuXBjKoA"
          /> */}
        {/* <img
            className={"image-preview"}
            src="https://i.picsum.photos/id/212/700/700.jpg?hmac=GrEX7n4bVOZt4IjO2_WLLcoiQvPMQT7Sb8QfuXBjKoA"
          /> */}
        {/* </div> */}
        {/* <div className={"update-class " + this.props.setCropClass}></div> */}
        <ReactCrop src={src} crop={crop} onChange={this.onCropChange} />
      </div>
    );
  }
}

export default Preview;
