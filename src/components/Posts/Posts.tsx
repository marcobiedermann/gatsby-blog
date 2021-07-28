import React from 'react';
import PostPreview, { PostPreviewProps } from '../PostPreview/PostPreview';
import * as styles from './Posts.module.css';

export interface PostsProps {
  posts: PostPreviewProps[];
}

function Posts(props: PostsProps) {
  const { posts } = props;

  return (
    <ol className={styles.posts}>
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
