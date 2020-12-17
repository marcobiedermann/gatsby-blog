import React, { FC } from 'react';
import styles from './style.module.css';

const Header: FC = (props) => {
  return <header className={styles.header} {...props} />;
};

export default Header;
