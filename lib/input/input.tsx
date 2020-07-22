import React, {InputHTMLAttributes} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './input.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

const sc = scopedClassMaker('gulu-input');

const Input: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <input className={sc('', {extra: className})} type="text" {...rest} />
  );
};

export default Input;