import React from 'react';
import {scopedClassMaker} from '../classes';
import classes from '../helpers/classes';

const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Aside: React.FunctionComponent<Props> = ({className, ...rest}) => {
  return (
    <div className={classes(sc('aside'), className)} {...rest}>Aside</div>
  );
};

export default Aside;