import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Button from '../../components/Button';
import Layout from '../../components/Layout';

export interface DataProps {
  markdownRemark: {
    frontmatter: {
      title: string;
    };
    html: string;
  };
}

const PostPage: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { markdownRemark },
  } = props;

  const { html } = markdownRemark;

  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
        title
      }
      html
    }
  }
`;

export default PostPage;
