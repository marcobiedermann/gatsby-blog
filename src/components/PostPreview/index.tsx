import { Link } from 'gatsby';
import React, { FC } from 'react';

interface Frontmatter {
  title: string;
}

export interface PostPreviewProps {
  excerpt: string;
  frontmatter: Frontmatter;
  id: string;
}

const PostPreview: FC<PostPreviewProps> = (props) => {
  const { excerpt, frontmatter, id } = props;

  return (
    <article>
      <h2>
        <Link to={`/posts/${id}`}>{frontmatter.title}</Link>
      </h2>
      <p>{excerpt}</p>
    </article>
  );
};

export default PostPreview;
