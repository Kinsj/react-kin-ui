import React, {Fragment, useState} from 'react';
import Form, {FormValue} from './form';

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'kin',
    password: '123'
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);
  const onSubmitHandle: React.FormEventHandler<HTMLFormElement> = () => {
    console.log(formData);
  };
  return (
    <Form value={formData} fields={fields}
          buttons={
            <Fragment>
              <button type="submit">提交</button>
              <button>取消</button>
            </Fragment>
          }
          onSubmit={onSubmitHandle}
          onChange={setFormData}
    />
  );
};

export default FormExample;