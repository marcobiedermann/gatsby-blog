import React, { ReactNode } from 'react';
import { grid } from './Grid.module.css';

export interface GridProps {
  children: ReactNode;
}

function Grid(props: GridProps) {
  return <div className={grid} {...props} />;
}

export default Grid;
