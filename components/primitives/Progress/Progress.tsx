import * as Progress from '@radix-ui/react-progress';
import { styled } from 'stitches.config';

const StyledProgress = styled(Progress.Root, {
    background: 'transparent',
    width: '100%',
    // position: 'absolute',
    // bottom:'-4px',
    marginTop:'$2',
    height: '2px',
  });
  
  const StyledIndicator = styled(Progress.Indicator, {
    backgroundColor: 'white',
    height: '100%',
    boxShadow:' 0px 0px 2px 1px rgba(255, 255, 255, 0.5)',
    filter:'blur(1px)',
    transition: 'width 660ms cubic-bezier(0.65, 0, 0.35, 1)',
  });

  export {
    StyledProgress as ProgressRoot,
    StyledIndicator as ProgressIndicator,
  }