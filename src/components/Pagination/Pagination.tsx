/* eslint-disable camelcase */

import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import {
  pagination,
  pagination__itemNext,
  pagination__itemPrevious,
} from './Pagination.module.css';

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
    <ul className={pagination}>
      {previous && (
        <li className={clsx(pagination__itemPrevious)}>
          <Link to={`/blog${previous.fields.slug}`}>« Previous</Link>
        </li>
      )}
      {next && (
        <li className={clsx(pagination__itemNext)}>
          <Link to={`/blog${next.fields.slug}`}>Next »</Link>
        </li>
      )}
    </ul>
  );
}

export default Pagination;
