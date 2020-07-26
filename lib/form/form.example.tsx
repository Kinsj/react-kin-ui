import React, {Fragment, useState} from 'react';
import Form, {FormValue} from './form';
import Validator from './validator';
import './form.example.scss'
import Button from '../button/button';

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
                <Button type="submit" level="important">提交</Button>
                <Button>取消</Button>
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