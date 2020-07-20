import React from 'react';
import { InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

interface LoginFormProps {
  form: {
    getFieldProps: Function;
    getFieldsValue: Function;
  };
  handleSubmit: Function;
}
const LoginForm: React.FC<LoginFormProps> = ({ form, handleSubmit }) => {
  // console.log('form', form);
  const { getFieldProps, getFieldsValue } = form;
  const submit = () => {
    let value = getFieldsValue();
    // console.log('value', value)
    handleSubmit(value);
  };
  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <InputItem
        {...getFieldProps('name')}
        type="text"
        clear
        placeholder="请输入账号"
      >
        账号
      </InputItem>
      <InputItem
        {...getFieldProps('password')}
        type="text"
        clear
        placeholder="请输入密码"
      >
        密码
      </InputItem>
      <WhiteSpace size="lg" />

      <Button type="primary" onClick={submit}>
        登陆
      </Button>
    </WingBlank>
  );
};

export default createForm()(LoginForm);
