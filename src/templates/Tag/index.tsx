import { graphql, PageProps } from 'gatsby';
import React, { FC } from 'react';
import Layout from '../../components/Layout';
import Posts from '../../components/Posts';

interface Fields {
  slug: string;
}

interface Frontmatter {
  title: string;
}

interface Node {
  excerpt: string;
  fields: Fields;
  frontmatter: Frontmatter;
  html: string;
  id: string;
}

interface Edge {
  node: Node;
}

interface AllMarkdownRemark {
  edges: Edge[];
}

export interface DataProps {
  allMarkdownRemark: AllMarkdownRemark;
}

const TagTemplate: FC<PageProps<DataProps>> = (props) => {
  const {
    data: { allMarkdownRemark },
  } = props;

  return (
    <Layout>
      <h1>Hi people</h1>
      <Posts posts={allMarkdownRemark.edges.map((edge) => edge.node)} />
    </Layout>
  );
};

export const query = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
          id
        }
      }
    }
  }
`;

export default TagTemplate;
