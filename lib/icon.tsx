import React from 'react';
import './importIcons';
import './icon.scss';

// 申明Icon 组件接受的props属性的类型
interface IconProps {
  name: string,
  // onClick: () => void  // 这种写法的弊端就是如果传参，就得指定参数类型，如果访问参数内的属性，又得指定参数内属性的类型，
  // 参数不确定还得断言，根本没法写
  // 所以还是采用下面这种写法

  onClick: React.MouseEventHandler<SVGElement>
}

// 阅读FunctionComponent源码可见，类型定义里 FunctionComponent 接受一个interface参数指定props类型，并接受children作为可选参数
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="gulu-icon" onClick={props.onClick}>
      <use xlinkHref={"#" + props.name}/>
    </svg>
  );
};

export default Icon;