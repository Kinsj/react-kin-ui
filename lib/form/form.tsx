import React, {ReactFragment} from 'react';
import {FormErrors} from './validator';
import Input from '../input/input';
import './form.scss';

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
      <table className="gulu-form-table">
        <tbody>
        {props.fields.map(f =>
          <tr className='gulu-form-item' key={f.name}>
            <td>
              <span className='gulu-form-label'>{f.label}</span>
            </td>
            <td>
              <Input type={f.input.type} value={formData[f.name]}
                     onChange={onInputChangeHandle.bind(null, f.name)
                       /*这里使用bind可以把f.name作为前置参数传给onInputChangeHandle
                       * 相当于调用了 onInputChangeHandle(f.name, event)*/
                     }/>
              <p className="gulu-form-error">
                {props.errors[f.name]
                  ? props.errors[f.name].join('，')
                  : <span>&nbsp;</span>
                }
              </p>

            </td>
          </tr>
        )}
        <tr className='gulu-form-item'>
          <td/>
          <td>
            {props.buttons}
          </td>
        </tr>
        </tbody>
      </table>

    </form>
  );
};

export default Form;