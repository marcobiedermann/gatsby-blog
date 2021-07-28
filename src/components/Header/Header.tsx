import React, { ReactNode } from 'react';
import * as styles from './Header.module.css';

export interface HeaderProps {
  children: ReactNode;
}

function Header(props: HeaderProps) {
  return <header className={styles.header} {...props} />;
}

export default Header;