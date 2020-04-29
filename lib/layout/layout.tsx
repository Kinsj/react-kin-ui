import React, {ReactElement} from 'react';
import './layout.scss';
import {scopedClassMaker} from '../helpers/classes';
import Aside from './aside';


const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}


const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  const children = props.children as Array<ReactElement>;
  const hasAside = length in children &&  // reduce 接受一个函数和一个初始结果，这个函数为： (累积结果 和 当前变量) => {return 下一次的累积结果}
    children.reduce((result, node) => {
      return node.type === Aside || result;
    }, false);

  return (
    <div className={sc({'': true, 'has-aside': hasAside}, {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;