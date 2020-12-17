import { Link } from 'gatsby';
import React, { FC } from 'react';

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

const PostPreview: FC<PostPreviewProps> = (props) => {
  const { excerpt, fields, frontmatter, timeToRead } = props;

  return (
    <article>
      <h2>
        <Link to={`/blog${fields.slug}`}>{frontmatter.title}</Link>
      </h2>
      <div>
        {frontmatter.date} • {timeToRead} mins.
      </div>
      <p>{excerpt}</p>
    </article>
  );
};

export default PostPreview;
