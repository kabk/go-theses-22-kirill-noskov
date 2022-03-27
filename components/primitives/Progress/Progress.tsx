import * as Progress from '@radix-ui/react-progress';
import { styled, keyframes } from 'stitches.config';

const animationwidth = keyframes({
  '0%': { width: 'calc(95%)' },
  '100%': { width: '100%'}  
})


const StyledProgress = styled(Progress.Root, {
    background: 'transparent',
    width: '100%',
    animation: `${animationwidth} 2s linear infinite`,
    animationFillMode : 'both',
    animationDirection: 'alternate',
    animationTimingFunction: 'cubic-bezier(0.1, 0.7, 1.2, 0.1)',
    animationDelay: '2.5s',
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