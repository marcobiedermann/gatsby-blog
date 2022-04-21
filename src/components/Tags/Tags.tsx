import { Link } from 'gatsby';
import React from 'react';
import { tags as tagsStyles, tag as tagStyles } from './Tags.module.css';

export interface TagsProps {
  tags: string[];
}

function Tags(props: TagsProps) {
  const { tags } = props;

  return (
    <ul className={tagsStyles}>
      {tags.map((tag) => (
        <li key={tag}>
          <Link className={tagStyles} to={`/tags/${tag}`}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Tags;
