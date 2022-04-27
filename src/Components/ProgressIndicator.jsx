import LinearProgress from '@mui/material/LinearProgress';
import './ProgressIndicator.scss';

const ProgressIndicator = props => {
  const { showLabel, value, label } = props;
  const getLinearProgress = () => {
    if (showLabel) {
      return <LinearProgress variant='determinate' value={value} />;
    } else {
      return <LinearProgress />;
    }
  };
  return (
    <>
      <div className='backdrop'>
        <div className='progress-indicator-wrapper'>
          <div className='label-wrapper'>
            <div className='label'>{label}</div>
            <div className='progress-value'>{value ? value + '%' : ''}</div>
          </div>
          <div style={{ margin: '20px' }}>{getLinearProgress()}</div>
        </div>
      </div>
    </>
  );
};

export default ProgressIndicator;
