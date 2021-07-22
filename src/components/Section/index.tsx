import React, { ReactNode } from 'react';
import * as styles from './style.module.css';

export interface SectionProps {
  children: ReactNode;
}

function Section(props: SectionProps) {
  return <section className={styles.section} {...props} />;
}

export default Section;
