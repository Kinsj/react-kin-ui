import React, {HTMLAttributes, ReactElement} from 'react';
import classes from '../helpers/classes';
import withProps from '../helpers/withProps';
import SliderTitle from './sliderTitle';
import SliderBody from './sliderBody';

interface Props extends HTMLAttributes<HTMLLIElement> {
  visible?: boolean,
  onClick?: () => any,
  children: Array<ReactElement>
}

const SliderItem: React.FC<Props> = (props) => {
  const {className, children, visible, ...rest} = props;
  return (
    <li className={classes('gulu-slider-title', className)} {...rest}>
      {withProps(SliderTitle, {...children[0].props, onClick: props.onClick})}
      {withProps(SliderBody, {...children[1].props, visible: props.visible})}
    </li>
  )
};

export default SliderItem;