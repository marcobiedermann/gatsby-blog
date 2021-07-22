import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Pagination from '../../components/Pagination';
import Post from '../../components/Post';
import Section from '../../components/Section';

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

export interface PostTemplateProps extends PageProps<DataType, PageContextType> {}

function PostTemplate(props: PostTemplateProps) {
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
        <Post date={date} html={html} tags={tags} timeToRead={timeToRead} title={title} />
      </Section>
      <Section>
        <Pagination next={next} previous={previous} />
        <p>
          <Button to="/">back</Button>
        </p>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
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
