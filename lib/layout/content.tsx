import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Content: React.FunctionComponent<Props> = ({className, ...rest}) => {
  return (
    <div className={sc('content', {extra: className})} {...rest}>content</div>
  );
};

export default Content;