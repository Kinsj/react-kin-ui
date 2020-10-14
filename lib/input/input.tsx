import React, {InputHTMLAttributes} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

const sc = scopedClassMaker('gulu-input');

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {className, ...rest} = props;
  return (
    <input className={sc('', {extra: className})} ref={ref} type="text" {...rest} />
  );
});

export default Input;