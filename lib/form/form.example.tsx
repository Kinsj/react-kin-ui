import React, {Fragment, useState} from 'react';
import Form, {FormValue} from './form';
import Validator from './validator';
import './form.example.scss'

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);
  const [errors, setErrors] = useState({});
  const onSubmitHandle: React.FormEventHandler<HTMLFormElement> = () => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', maxLength: 16},
      {key: 'username', minLength: 6},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'password', required: true},
    ];

    setErrors(Validator(formData, rules));

  };
  return (
    <div className="gulu-form-example">
      <Form value={formData} fields={fields}
            buttons={
              <Fragment>
                <button type="submit">提交</button>
                <button>取消</button>
              </Fragment>
            }
            errors={errors}
            onSubmit={onSubmitHandle}
            onChange={setFormData}
      />
    </div>
  );
};

export default FormExample;