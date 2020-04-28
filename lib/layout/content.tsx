import React from 'react';
import {scopedClassMaker} from '../classes';
import classes from '../helpers/classes';

const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Content: React.FunctionComponent<Props> = ({className, ...rest}) => {
  return (
    <div className={classes(sc('content'), className)} {...rest}>content</div>
  );
};

export default Content;