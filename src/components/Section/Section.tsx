import React, { ReactNode } from 'react';
import { section } from './Section.module.css';

export interface SectionProps {
  children: ReactNode;
}

function Section(props: SectionProps) {
  return <section className={section} {...props} />;
}

export default Section;
