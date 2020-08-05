import * as React from 'react';
import classes from '../helpers/classes';
import {HTMLAttributes} from 'react';
import Slider from './slider';

interface Props extends HTMLAttributes<HTMLDivElement> {
  visible?: boolean
}

const SliderBody: React.FC<Props> = (props) => {
  const {className, children, visible, ...rest} = props;
  return (
    <div className={classes('gulu-slider-body', className)} {...rest}>
      <Slider visible={visible || false}>
        {children}
      </Slider>
    </div>
  )
};

export default SliderBody;