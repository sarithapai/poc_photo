import { Component } from 'react';
import TopBar from './TopBar/TopBar';
import './Export.scss';
import Preview from './Preview/Preview.jsx';
import SideBar from './SideBar/SideBar.jsx';
class Export extends Component {
  state = {
    // availableResolutions: [
    //   "outline-offset-1",
    //   "outline-offset-2",
    //   "outline-offset-3",
    // ],
    // availableResolutions: [
    //   "update-class-1",
    //   "update-class-2",
    //   "update-class-3",
    // ],
    setCropClass: ''
  };

  cropImage = id => {
    this.setState({
      setCropClass: this.state.availableResolutions[id - 1]
    });
  };

  render() {
    return (
      <>
        <div className='export-wrapper'>
          <TopBar />
          <SideBar
            cropImage={this.cropImage}
            selectedIcon={this.state.selectedIcon}
          />
          <Preview setCropClass={this.state.setCropClass} />
        </div>
      </>
    );
  }
}

export default Export;
