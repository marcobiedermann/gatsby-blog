import dayjs from 'dayjs';
import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import Section from '../../components/Section';
import Tags from '../../components/Tags';
import { DATE_FORMAT } from '../../constants/date';

export interface DataType {
  markdownRemark: {
    frontmatter: {
      date: string;
      tags: string[];
      title: string;
    };
    html: string;
    timeToRead: number;
  };
}

interface PageContextType {
  id: string;
  next: {
    fields: {
      slug: string;
    };
    id: string;
  } | null;
  previous: {
    fields: {
      slug: string;
    };
    id: string;
  } | null;
}

const PostTemplate: FC<PageProps<DataType, PageContextType>> = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: { date, tags, title },
        html,
        timeToRead,
      },
    },
    pageContext: { next, previous },
  } = props;

  return (
    <Layout>
      <Section>
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
      </Section>
      <Section>
        <Pagination next={next} previous={previous} />
        <p>
          <Button to="/">back</Button>
        </p>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        tags
        title
      }
      html
      timeToRead
    }
  }
`;

export default PostTemplate;
