import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';

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

  const { html, frontmatter } = markdownRemark;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
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
