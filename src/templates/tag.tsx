import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';

interface Fields {
  slug: string;
}

interface Frontmatter {
  date: string;
  title: string;
}

interface Node {
  excerpt: string;
  fields: Fields;
  frontmatter: Frontmatter;
  html: string;
  id: string;
  timeToRead: number;
}

interface Edge {
  node: Node;
}

interface AllMarkdownRemark {
  edges: Edge[];
}

interface DataType {
  allMarkdownRemark: AllMarkdownRemark;
}

interface PageContext {
  tag: string;
}

export interface TagTemplateProps extends PageProps<DataType, PageContext> {}

function TagTemplate(props: TagTemplateProps) {
  const {
    data: { allMarkdownRemark },
    pageContext: { tag },
  } = props;

  return (
    <Layout>
      <h1>{tag}</h1>
      <Posts posts={allMarkdownRemark.edges.map((edge) => edge.node)} />
    </Layout>
  );
}

export const query = graphql`
  query ($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { frontmatter: { date: DESC } }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
          }
          html
          id
          timeToRead
        }
      }
    }
  }
`;

export default TagTemplate;
