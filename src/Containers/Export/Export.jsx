import { Component } from "react";
import TopBar from "./TopBar/TopBar";
import "./Export.scss";
import Preview from "./Preview/Preview.jsx";
import SideBar from "./SideBar/SideBar.jsx";
class Export extends Component {
  state = {
    portraitDimensions: [
      [50, 100],
      [30.48, 40.64],
      [40.64, 60.96],
      [50.8, 101.6],
    ],
    landscapeDimensions: [
      [100, 50],
      [40.64, 30.48],
      [60.96, 40.64],
      [101.6, 50.8],
    ],
    cropDimensions: [50, 50],
    selectedCrop: "Portrait",
  };

  cropImage = (id) => {
    const dimension =
      this.state.selectedCrop == "Portrait"
        ? this.state.portraitDimensions[id]
        : this.state.landscapeDimensions[id];
    this.setState({
      cropDimensions: dimension,
    });
  };

  handleChange = (selected) => {
    this.setState({
      selectedCrop: selected.value,
    });
    console.log(this.state.selectedCrop);
  };

  render() {
    return (
      <>
        <div className="export-wrapper">
          <TopBar />
          <SideBar
            cropImage={this.cropImage}
            selectedIcon={this.state.selectedIcon}
            selectedCrop={this.state.selectedCrop}
            handleChange={this.handleChange}
          />
          <Preview cropDimensions={this.state.cropDimensions} />
        </div>
      </>
    );
  }
}

export default Export;
