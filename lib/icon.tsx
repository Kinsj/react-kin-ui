import React from 'react';

// 申明Icon 组件接受的props属性的类型
interface IconProps {
  name: string
}
// 阅读FunctionComponent源码可见，类型定义里 FunctionComponent 接受一个interface参数指定props类型，并接受children作为可选参数
const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>{props.name}</span>
  );
};

export default Icon;