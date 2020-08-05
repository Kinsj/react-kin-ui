import React, {ReactElement, ReactNode, useState} from 'react';
import classes from '../helpers/classes';
import useDidMount from '../helpers/hooks/useDidMount';
import SliderItem from './sliderItem';
import withProps from '../helpers/withProps';
import SliderTitle from './sliderTitle';
import SliderBody from './sliderBody';

interface Props extends React.HTMLAttributes<HTMLUListElement>{
  data?: Array<string | ReactNode>,
  children: Array<ReactElement>
}

const validGroup = (arr: Array<ReactElement>) => {
  const allItem = arr.reduce(
    (result, node) => {
      return node?.type === SliderItem && result;
    },
    true
  );
  if (!allItem) throw new Error('SliderGroup 只能接受 SliderItem 数组');
  for(let i=0; i<arr.length; i++) {
    if(arr[i].props.children[0].type !== SliderTitle || arr[i].props.children[1].type !== SliderBody) {
      throw new Error('SliderItem 内 只能是 [SliderTitle, SliderBody] 形式')
    }
  }
};

const SliderGroup: React.FC<Props> = (props) => {
  const {className, data, ...rest} = props;
  const [cur, setCur] = useState<number>(-1);
  console.log(cur);

  useDidMount(() => {
    validGroup(props.children)
  });

  return (
    <ul className={classes("gulu-slider-group", className)} {...rest}>
      {props.children.map(
        (item, index) =>
          withProps(SliderItem, {
            ...item.props,
            visible: cur === index,
            key: index,
            onClick: () => setCur(cur === index ? -1 : index)
          }))}
    </ul>
  )
};

export default SliderGroup;