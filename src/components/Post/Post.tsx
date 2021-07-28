/* eslint-disable react/no-danger */

import dayjs from 'dayjs';
import React from 'react';
import { DATE_FORMAT } from '../../constants/date';
import Tags from '../Tags';

export interface PostProps {
  date: string;
  html: string;
  tags: string[];
  timeToRead: number;
  title: string;
}

function Post(props: PostProps) {
  const { date, html, tags, timeToRead, title } = props;

  return (
    <article>
      <header>
        <h1>{title}</h1>
        <div>
          <time dateTime={date}>{dayjs(date).format(DATE_FORMAT)}</time> • {timeToRead} mins.
        </div>
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <footer>
        <Tags tags={tags} />
      </footer>
    </article>
  );
}

export default Post;
