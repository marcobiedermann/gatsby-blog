import React, { FC } from 'react';
import * as styles from './style.module.css';

const Section: FC = (props) => {
  return <section className={styles.section} {...props} />;
};

export default Section;
