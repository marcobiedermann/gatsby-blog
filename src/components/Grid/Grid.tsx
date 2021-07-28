import React, { ReactNode } from 'react';
import * as styles from './Grid.module.css';

export interface GridProps {
  children: ReactNode;
}

function Grid(props: GridProps) {
  return <div className={styles.grid} {...props} />;
}

export default Grid;
