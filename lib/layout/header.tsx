import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('gulu-layout');

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const Header: React.FunctionComponent<Props> = ({className, ...rest}) => {
  return (
    <div className={sc('header', {extra: className})} {...rest}>
      {rest.children}
    </div>
  );
};

export default Header;