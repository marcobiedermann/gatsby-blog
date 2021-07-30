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
  year: number;
}

export interface YearTemplateProps extends PageProps<DataType, PageContext> {}

function YearTemplate(props: YearTemplateProps) {
  const {
    data: { allMarkdownRemark } = { allMarkdownRemark: { edges: [] } },
    pageContext: { year },
  } = props;

  return (
    <Layout>
      <h1>{year}</h1>
      <Posts posts={allMarkdownRemark.edges.map((edge) => edge.node)} />
    </Layout>
  );
}

export const query = graphql`
  query ($year: Int!) {
    allMarkdownRemark(
      filter: { fields: { year: { eq: $year } } }
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

export default YearTemplate;
