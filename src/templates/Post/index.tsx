import dayjs from 'dayjs';
import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Tags from '../../components/Tags';
import { DATE_FORMAT } from '../../constants/date';

export interface DataProps {
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

const PostTemplate: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { markdownRemark },
  } = props;

  const { frontmatter, html, timeToRead } = markdownRemark;

  return (
    <Layout>
      <Section>
        <article>
          <header>
            <h1>{frontmatter.title}</h1>
            <div>
              <time dateTime={frontmatter.date}>{dayjs(frontmatter.date).format(DATE_FORMAT)}</time>{' '}
              • {timeToRead} mins.
            </div>
          </header>
          <main>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </main>
          <footer>
            <Tags tags={frontmatter.tags} />
          </footer>
        </article>
      </Section>
      <Section>
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
