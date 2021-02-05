import { Link } from 'gatsby';
import React, { FC } from 'react';
import styles from './style.module.css';

export interface PaginationProps {
  next: {
    fields: {
      slug: string;
    };
  } | null;
  previous: {
    fields: {
      slug: string;
    };
  } | null;
}

const Pagination: FC<PaginationProps> = (props) => {
  const { next, previous } = props;

  return (
    <ul className={styles.pagination}>
      {previous && (
        <li>
          <Link to={`/blog${previous.fields.slug}`}>« Previous</Link>
        </li>
      )}
      {next && (
        <li>
          <Link to={`/blog${next.fields.slug}`}>Next »</Link>
        </li>
      )}
    </ul>
  );
};

export default Pagination;