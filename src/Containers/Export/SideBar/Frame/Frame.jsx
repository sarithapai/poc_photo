import './Frame.scss';
import { useState } from 'react';
import FrameSetting from './FrameSetting.jsx';

const Frame = () => {
  const frameTypes = [
    {
      id: 1,
      image_path: '/download.jpeg',
      name: 'Unframed',
      description:
        'We use acid-free mat boards. The neutral contrast of a white mat helps artwork really pop, creating a stunning viewing experience.'
    },
    {
      id: 2,
      image_path: '/download.jpeg',
      name: 'Framed',
      description:
        'Our gallery frame are made with premium Italian pine. This frame’s slim face and pronounced depth is the preferred style by most artists and designers.'
    }
  ];
  const [selectedFrameId, setSelectedFrameId] = useState(null);
  return (
    <>
      <div className='frame-types-wrapper'>
        {frameTypes.map(frame => (
          <div
            key={frame.id}
            // className='frame-wrapper'
            onClick={() => {
              setSelectedFrameId(frame.id);
            }}
            className={
              frame.id === selectedFrameId
                ? 'frame-wrapper selected-frame'
                : 'frame-wrapper'
            }
          >
            <div>
              <img
                alt=''
                src='https://i.picsum.photos/id/212/700/700.jpg?hmac=GrEX7n4bVOZt4IjO2_WLLcoiQvPMQT7Sb8QfuXBjKoA'
              />{' '}
            </div>
            <div className='frame-detail'>
              <div> {frame.name}</div>

              <div className='description'>{frame.description}</div>
            </div>
          </div>
        ))}
        {/* show frame settings only if selected frame type is 'Framed' */}
        {selectedFrameId === frameTypes[1].id ? <FrameSetting /> : null}
      </div>
    </>
  );
};

export default Frame;

// 1. if selected frame type is framed then show another
// view with transition
// also change img in framed type
