import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Aside: React.FunctionComponent<Props> = ({className, ...rest}) => {
  return (
    <div className={sc('aside', {extra: className})}  {...rest}>Aside</div>
  );
};

export default Aside;