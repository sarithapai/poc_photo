import React, { useState } from 'react';

const FrameSetting = () => {
  const colors = [
    { id: 1, name: 'Nat', value: '#d5bea2' },
    { id: 2, name: 'Black', value: '#352f2f' },
    { id: 3, name: 'White', value: '#f6f0f0' }
  ];
  const mattingTypes = [
    {
      id: 1,
      name: 'Default',
      styleClass: 'color-item matting default-matting'
    },
    {
      id: 2,
      name: 'Medium',
      styleClass: 'color-item matting medium-matting'
    },
    {
      id: 3,
      name: 'Small',
      styleClass: 'color-item matting small-matting'
    }
  ];
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedmatting, setSelectedMatting] = useState(null);
  return (
    <>
      <div style={{ marginBottom: '30px' }}>
        <div className='frame-color-title'>Frame Color</div>
        <div className='color-box'>
          {colors.map(color => (
            <div className='color-item-wrapper '>
              <div
                key='name'
                // className='color-item'
                className={
                  selectedColor === color.id
                    ? 'color-item active'
                    : 'color-item '
                }
                onClick={() => setSelectedColor(color.id)}
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
            <div className='color-item-wrapper'>
              <div
                className={
                  selectedmatting === matting.id
                    ? matting.styleClass + ' active'
                    : matting.styleClass
                }
                onClick={() => setSelectedMatting(matting.id)}
                // className={}
              ></div>

              <div>{matting.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FrameSetting;
