import { graphql, PageProps, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';

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

interface StaticQuery {
  allMarkdownRemark: AllMarkdownRemark;
}

const IndexPage: FC<PageProps> = () => {
  const { allMarkdownRemark } = useStaticQuery<StaticQuery>(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: 10) {
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
  `);

  console.log({ allMarkdownRemark });

  return (
    <Layout>
      <h1>Hi people</h1>
      <Posts posts={allMarkdownRemark.edges.map((edge) => edge.node)} />
    </Layout>
  );
};

export default IndexPage;
