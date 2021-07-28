import React, { ReactNode } from 'react';
import * as styles from './Main.module.css';

export interface MainProps {
  children: ReactNode;
}

function Main(props: MainProps) {
  return <main className={styles.main} {...props} />;
}

export default Main;