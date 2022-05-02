import React, { useState, useContext } from 'react';
import { FRAME_COLORS, FRAME_MATTINGS } from '../../../../Utils/Constants';
import { GlobalContext } from '../../../../Context/GlobalState';

const FrameSetting = () => {
  const colors = [
    { id: 1, name: 'Nat', value: FRAME_COLORS.NAT },
    { id: 2, name: 'Black', value: FRAME_COLORS.BLACK },
    { id: 3, name: 'White', value: FRAME_COLORS.WHITE }
  ];
  const mattingTypes = [
    {
      id: 1,
      name: 'Default',
      value: FRAME_MATTINGS.DEFAULT,
      styleClass: 'color-item matting default-matting'
    },
    {
      id: 2,
      name: 'Medium',
      value: FRAME_MATTINGS.MEDIUM,
      styleClass: 'color-item matting medium-matting'
    },
    {
      id: 3,
      name: 'Small',
      value: FRAME_MATTINGS.SMALL,
      styleClass: 'color-item matting small-matting'
    }
  ];
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedmatting, setSelectedMatting] = useState(null);

  const { updateFrameColor, updateFrameMatting } = useContext(GlobalContext);

  return (
    <div style={{ transition: '2s' }}>
      <div style={{ marginBottom: '30px' }}>
        <div className='frame-color-title'>Frame Color</div>
        <div className='color-box'>
          {colors.map(color => (
            <div className='color-item-wrapper ' key={color.id}>
              <div
                key='name'
                // className='color-item'
                className={
                  selectedColor === color.id
                    ? 'color-item active'
                    : 'color-item '
                }
                onClick={() => {
                  setSelectedColor(color.id);
                  updateFrameColor(color.value);
                }}
                style={{ backgroundColor: color.value }}
              ></div>
              <div>{color.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className='frame-color-title'>Matting</div>
        <div className='color-box'>
          {mattingTypes.map(matting => (
            <div className='color-item-wrapper' key={matting.id}>
              <div
                className={
                  selectedmatting === matting.id
                    ? matting.styleClass + ' active'
                    : matting.styleClass
                }
                onClick={() => {
                  setSelectedMatting(matting.id);
                  updateFrameMatting(matting.value);
                }}
                // className={}
              ></div>

              <div>{matting.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameSetting;
