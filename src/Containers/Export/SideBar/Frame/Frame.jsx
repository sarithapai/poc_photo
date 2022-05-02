import './Frame.scss';
import { useState, useContext } from 'react';
import FrameSetting from './FrameSetting.jsx';
import { Icons } from '../../../../Utils/Icons';
import { UNFRAMED, FRAMED } from '../../../../Utils/Constants';
import { GlobalContext } from '../../../../Context/GlobalState';

const Frame = () => {
  const frameTypes = [
    {
      id: 1,
      image_path: Icons.unframed,
      name: UNFRAMED,
      description:
        'We use acid-free mat boards. The neutral contrast of a white mat helps artwork really pop, creating a stunning viewing experience.'
    },
    {
      id: 2,
      image_path: Icons.framed,
      name: FRAMED,
      description:
        'Our gallery frame are made with premium Italian pine. This frame’s slim face and pronounced depth is the preferred style by most artists and designers.'
    }
  ];
  const [selectedFrameId, setSelectedFrameId] = useState(null);
  const { updateFrameType } = useContext(GlobalContext);
  return (
    <>
      <div className='frame-types-wrapper'>
        {frameTypes.map(frame => (
          <div
            key={frame.id}
            onClick={() => {
              setSelectedFrameId(frame.id);
              updateFrameType(frame.name);
            }}
            className={
              frame.id === selectedFrameId
                ? 'frame-wrapper selected-frame'
                : 'frame-wrapper'
            }
          >
            <div></div>
            <div>
              <img alt='' src={frame.image_path} />{' '}
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
