import React, {HTMLAttributes} from 'react';
import Fade from './fade';

interface IFadeUpProps extends HTMLAttributes<HTMLDivElement> {
  visible: boolean
  dur?: number
  y?: number
}

const FadeUp: React.FC<IFadeUpProps> = (props) => {
  return (
    <Fade visible={props.visible} transform={`translateY(${props.y}px)`} dur={props.dur}>
      {props.children}
    </Fade>
  );
};

FadeUp.defaultProps = {
  y: 10,
  dur: 300,
};

export default FadeUp;