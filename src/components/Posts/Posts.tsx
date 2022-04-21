import React from 'react';
import PostPreview, { PostPreviewProps } from '../PostPreview/PostPreview';
import { posts as postsStyles } from './Posts.module.css';

export interface PostsProps {
  posts: PostPreviewProps[];
}

function Posts(props: PostsProps) {
  const { posts } = props;

  return (
    <ol className={postsStyles}>
      {posts.map((post) => {
        const { id } = post;

        return (
          <li key={id}>
            <PostPreview {...post} />
          </li>
        );
      })}
    </ol>
  );
}

export default Posts;
