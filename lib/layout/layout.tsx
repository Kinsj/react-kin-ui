import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../classes';
import './layout.scss';
import classes from '../helpers/classes';
import Aside from './aside';


const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}


const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  const x = props.children as Array<ReactElement>;
  const hasAside = x.length &&  // reduce 接受一个函数和一个初始结果，这个函数为： (累积结果 和 当前变量) => {return 下一次的累积结果}
    x.reduce((result, node) => {
      return node.type === Aside || result;
    }, false);

  return (
    <div className={classes(sc(), className, hasAside ? sc('has-aside') : '')} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;