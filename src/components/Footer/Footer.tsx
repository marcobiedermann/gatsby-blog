import React, { ReactNode } from 'react';
import * as styles from './Footer.module.css';

export interface FooterProps {
  children: ReactNode;
}

function Footer(props: FooterProps) {
  return <footer className={styles.footer} {...props} />;
}

export default Footer;
