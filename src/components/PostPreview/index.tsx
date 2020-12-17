import { Link } from 'gatsby';
import React, { FC } from 'react';

interface Fields {
  slug: string;
}

interface Frontmatter {
  title: string;
}

export interface PostPreviewProps {
  excerpt: string;
  fields: Fields;
  frontmatter: Frontmatter;
  id: string;
}

const PostPreview: FC<PostPreviewProps> = (props) => {
  const { excerpt, fields, frontmatter } = props;

  return (
    <article>
      <h2>
        <Link to={`/blog${fields.slug}`}>{frontmatter.title}</Link>
      </h2>
      <p>{excerpt}</p>
    </article>
  );
};

export default PostPreview;
