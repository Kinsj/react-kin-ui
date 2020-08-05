import * as React from 'react';
import {HTMLAttributes} from 'react';
import classes from '../helpers/classes';

interface Props extends HTMLAttributes<HTMLDivElement> {

}

const SliderTitle: React.FC<Props> = (props) => {
  const {className, children, ...rest} = props;
  return (
    <div className={classes('gulu-slider-title', className)} {...rest}>
      {children}
    </div>
  )
};

export default SliderTitle;