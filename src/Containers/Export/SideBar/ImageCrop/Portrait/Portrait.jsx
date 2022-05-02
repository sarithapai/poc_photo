import React, { Component } from "react";
import "./Portrait.scss";

class Portrait extends Component {
  state = {
    resolutions: [
      [0, "Default", ""],
      [1, "12x16", "304.8 x 406.4 mm"],
      [2, "16x24", "406.4 x 609.6 mm"],
      [3, "20x40", "508 x 1016 mm"],
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
            <div>
              <img className="img-icon-size" src="portrait-icon.png" />
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

export default Portrait;
