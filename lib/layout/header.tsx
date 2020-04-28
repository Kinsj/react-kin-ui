import React from 'react';
import {scopedClassMaker} from '../classes';
import classes from '../helpers/classes';

const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Header: React.FunctionComponent<Props> = ({className, ...rest}) => {
  return (
    <div className={classes(sc('header'), className)} {...rest}>header</div>
  );
};

export default Header;