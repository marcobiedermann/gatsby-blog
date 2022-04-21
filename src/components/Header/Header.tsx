import React, { ReactNode } from 'react';
import { header } from './Header.module.css';

export interface HeaderProps {
  children: ReactNode;
}

function Header(props: HeaderProps) {
  return <header className={header} {...props} />;
}

export default Header;
