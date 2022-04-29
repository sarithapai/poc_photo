import "./SideBar.scss";
import ImageCrop from "./ImageCrop/ImageCrop";

const SideBar = (props) => {
  const { cropImage, selectedIcon } = props;
  return (
    <>
      <div className="SideBar-wrapper">
        SideBar!!
        <ImageCrop cropImage={cropImage} selectedIcon={selectedIcon} />
      </div>
    </>
  );
};

export default SideBar;
