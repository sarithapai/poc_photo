import "./SideBar.scss";
import ImageCrop from "./ImageCrop/ImageCrop";
import Frame from "./Frame/Frame.jsx";
import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import {
  PAGE_FRAME_SELECTION,
  PAGE_SIZE_SELECTION,
} from "../../../Utils/Constants";

const SideBar = (props) => {
  const { cropImage, selectedIcon, selectedCrop, handleChange } = props;

  const { activePageIndex, setActivePageIndex } = useContext(GlobalContext);

  const navigateToNextPage = () => {
    setActivePageIndex(activePageIndex + 1);
  };

  return (
    <>
      <div className="SideBar-wrapper">
        {activePageIndex == PAGE_SIZE_SELECTION ? (
          <ImageCrop
            cropImage={cropImage}
            selectedIcon={selectedIcon}
            selectedCrop={selectedCrop}
            handleChange={handleChange}
          />
        ) : activePageIndex == PAGE_FRAME_SELECTION ? (
          <Frame />
        ) : null}
        <button onClick={navigateToNextPage}>Next</button>
      </div>
    </>
  );
};

export default SideBar;
