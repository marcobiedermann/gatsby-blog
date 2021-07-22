import classNames from 'classnames';
import { Link } from 'gatsby';
import React from 'react';
import * as styles from './style.module.css';

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

function Pagination(props: PaginationProps) {
  const { next, previous } = props;

  return (
    <ul className={styles.pagination}>
      {previous && (
        <li className={classNames(styles.pagination__itemPrevious)}>
          <Link to={`/blog${previous.fields.slug}`}>« Previous</Link>
        </li>
      )}
      {next && (
        <li className={classNames(styles.pagination__itemNext)}>
          <Link to={`/blog${next.fields.slug}`}>Next »</Link>
        </li>
      )}
    </ul>
  );
}

export default Pagination;
