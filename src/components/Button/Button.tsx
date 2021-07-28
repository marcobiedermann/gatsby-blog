import { Link } from 'gatsby';
import React, { ReactNode } from 'react';
import * as styles from './Button.module.css';

export interface ButtonProps {
  children: ReactNode;
  to?: string;
}

function Button(props: ButtonProps) {
  const { to, ...otherProps } = props;

  if (to) {
    return <Link className={styles.button} to={to} {...otherProps} />;
  }

  return <button className={styles.button} type="button" {...otherProps} />;
}

export default Button;
