import React from 'react';
import './customstyles.scss';

const CustomButtons = (props) => {
  const { onClick, variants, title, icons, altText, className, ...otherProps } =
    props;
  return variants === 'primary' ? (
    <button
      className={`button-primary ${className}`}
      {...otherProps}
      onClick={onClick}>
      {props.children}
    </button>
  ) : (
    <button
      onClick={onClick}
      className={`button-primary ${className}`}>
      {props.children}
    </button>
  );
};

export default CustomButtons;
