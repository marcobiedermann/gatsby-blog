import React, { FC } from 'react';
import PostPreview, { PostPreviewProps } from '../PostPreview';
import styles from './style.module.css';

export interface PostsProps {
  posts: PostPreviewProps[];
}

const Posts: FC<PostsProps> = (props) => {
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
};

export default Posts;
