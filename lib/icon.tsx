import React from 'react';
import './importIcons';
import './icon.scss';
import classes from './helpers/classes';

// 申明Icon 组件接受的props属性的类型
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string,
}

// 阅读FunctionComponent源码可见，类型定义里 FunctionComponent 接受一个interface参数指定props类型，并接受children作为可选参数
const Icon: React.FunctionComponent<IconProps> =
  ({
     className,
     name,
     ...restProps
  }) => {
  // 这里Icon组件是一个SVG元素，所以相对HTMLAttributes 更应该用 SVGAttributes
  return (
    <svg className={classes("gulu-icon", className)}
         {...restProps}>
      <use xlinkHref={"#" + name}/>
    </svg>
  );
};

export default Icon;