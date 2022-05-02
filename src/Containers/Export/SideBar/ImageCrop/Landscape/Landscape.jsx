import React, { Component } from "react";
import "./Landscape.scss";

class Landscape extends Component {
  state = {
    resolutions: [
      [0, "Default Landscape", ""],
      [1, "16x12", "406.4 x 304.8 mm"],
      [2, "24x16", "609.6 x 406.4 mm"],
      [3, "40x20", "1016 x 508 mm"],
    ],
    selected: 0,
  };

  selected = (id) => {
    this.setState({ selected: id });
  };

  render() {
    const { cropImage } = this.props;

    return (
      <div className="grid-container">
        {this.state.resolutions.map((resolution) => (
          <div
            className={
              resolution[0] == this.state.selected
                ? "grid-item selected"
                : "grid-item"
            }
            key={resolution[0]}
            onClick={() => {
              cropImage(resolution[0]);
              this.selected(resolution[0]);
            }}
          >
            <div className="parent">
              <img className="img-icon-size" src="landscape-icon.png" />
              <img
                className={
                  resolution[0] == this.state.selected
                    ? "img-icon-size checkmark"
                    : "img-icon-size checkmark hide-image"
                }
                src="checkmark.png"
              />
            </div>
            <div className="text-description">
              <span>{resolution[1]}</span>
              <br />
              <span>{resolution[2]}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Landscape;
