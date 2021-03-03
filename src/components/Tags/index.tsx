import { Link } from 'gatsby';
import React, { FC } from 'react';
import * as styles from './style.module.css';

export interface TagsProps {
  tags: string[];
}

const Tags: FC<TagsProps> = (props) => {
  const { tags } = props;

  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag}>
          <Link className={styles.tag} to={`/tags/${tag}`}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tags;
