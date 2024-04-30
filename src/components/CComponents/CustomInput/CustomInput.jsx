import { Input } from 'antd';
import React from 'react';
import './customstyles.scss';
import TextArea from 'antd/es/input/TextArea';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const CustomInput = (props) => {
  const { placeholder, onChange, value, variant, className, ...otherPops } =
    props;
  return variant === 'password' ? (
    <Input.Password
      placeholder={placeholder}
      className={`theme-inputs ${className}`}
      value={value}
      onChange={onChange}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      {...otherPops}
    />
  ) : variant === 'textBox' ? (
    <TextArea
      placeholder={placeholder}
      onChange={onChange}
      classNames={`${className}`}
      value={value}
      autoSize={false}
      {...otherPops}
    />
  ) : variant === 'searchBox' ? (
    <Input.Search
      placeholder={placeholder}
      onChange={onChange}
      classNames={`${className}`}
      value={value}
      {...otherPops}
    />
  ) : variant === 'otpBox' ? (
    <Input.OTP
      length={6}
      onChange={onChange}
      classNames={`${className}`}
      value={value}
      {...otherPops}
    />
  ) : (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      className={`theme-inputs ${className}`}
      value={value}
      {...otherPops}
    />
  );
};

export default CustomInput;
