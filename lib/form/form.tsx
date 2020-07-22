import React, {ReactFragment} from 'react';
import {FormErrors} from './validator';
import Input from '../input/input';
import classes from '../helpers/classes';
import './form.scss'

export interface FormValue {
  [K: string]: any
}


interface Props {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment,
  onChange: (value: FormValue) => void,
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  errors: FormErrors
}

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onInputChangeHandle
    = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange({...formData, [name]: e.target.value});
  };
  const onSubmitHandle: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault(); // 阻止默认submit事件执行
    props.onSubmit(e);
  };
  return (
    <form onSubmit={onSubmitHandle}>
      {props.fields.map(f =>
        <div className={classes('gulu-form-item')} key={f.name}>
          <span className={classes('gulu-form-label')}>{f.label}</span>
          <Input type={f.input.type} value={formData[f.name]}
                 onChange={onInputChangeHandle.bind(null, f.name)
                   /*这里使用bind可以把f.name作为前置参数传给onInputChangeHandle
                   * 相当于调用了 onInputChangeHandle(f.name, event)*/
                 }/>
          {props.errors[f.name] && props.errors[f.name].map( (err, index) => {
            return <span key={index}>{err}</span>
          })}

        </div>
      )}
      <div className={classes('gulu-form-buttons')}>
        {props.buttons}
      </div>
    </form>
  );
};

export default Form;