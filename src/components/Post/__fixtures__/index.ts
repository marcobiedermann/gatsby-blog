import { PostProps } from '..';
import tags from '../../Tags/__fixtures__';

const post: PostProps = {
  date: '2000-01-01',
  html: '<p>Lorem Ipsum</p>',
  tags: tags.tags,
  title: 'First Post',
  timeToRead: 1,
};

export default post;
