import { graphql, PageProps, useStaticQuery } from 'gatsby';
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

interface StaticQuery {
  allMarkdownRemark: AllMarkdownRemark;
}

export interface IndexPageProps extends PageProps {}

function IndexPage() {
  const { allMarkdownRemark } = useStaticQuery<StaticQuery>(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 10) {
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
  `);

  return (
    <Layout>
      <h1>Hi people</h1>
      <Posts posts={allMarkdownRemark.edges.map((edge) => edge.node)} />
    </Layout>
  );
}

export default IndexPage;
