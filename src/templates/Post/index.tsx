import { graphql, Link, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

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
      <header>
        <h1>{frontmatter.title}</h1>
        <div>
          {frontmatter.date} • {timeToRead} mins.
        </div>
      </header>
      <main>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <footer>
        <ul>
          {frontmatter.tags.map((tag) => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </footer>
      <p>
        <Button to="/">back</Button>
      </p>
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
