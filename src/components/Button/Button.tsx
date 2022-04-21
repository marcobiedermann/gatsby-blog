import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import { button } from './Button.module.css';

export interface ButtonProps {
  children: ReactNode;
  to?: string;
}

function Button(props: ButtonProps) {
  const { to, ...otherProps } = props;

  if (to) {
    return <Link className={button} to={to} {...otherProps} />;
  }

  return <button className={button} type="button" {...otherProps} />;
}

export default Button;
