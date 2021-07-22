import dayjs from 'dayjs';
import { Link } from 'gatsby';
import React from 'react';
import { DATE_FORMAT } from '../../constants/date';

interface Fields {
  slug: string;
}

interface Frontmatter {
  date: string;
  title: string;
}

export interface PostPreviewProps {
  excerpt: string;
  fields: Fields;
  frontmatter: Frontmatter;
  id: string;
  timeToRead: number;
}

function PostPreview(props: PostPreviewProps) {
  const { excerpt, fields, frontmatter, timeToRead } = props;

  return (
    <article>
      <h2>
        <Link to={`/blog${fields.slug}`}>{frontmatter.title}</Link>
      </h2>
      <div>
        <time dateTime={frontmatter.date}>{dayjs(frontmatter.date).format(DATE_FORMAT)}</time> •{' '}
        {timeToRead} mins.
      </div>
      <p>{excerpt}</p>
    </article>
  );
}

export default PostPreview;
