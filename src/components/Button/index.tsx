import { Link } from 'gatsby';
import React, { FC } from 'react';
import * as styles from './style.module.css';

export interface ButtonProps {
  to?: string;
}

const Button: FC<ButtonProps> = (props) => {
  const { to, ...otherProps } = props;

  if (to) {
    return <Link className={styles.button} to={to} {...otherProps} />;
  }

  return <button className={styles.button} {...otherProps} />;
};

export default Button;
