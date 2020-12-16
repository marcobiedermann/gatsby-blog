import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';
import Layout from '../components/layout';

interface Frontmatter {
  title: string;
}

interface Node {
  excerpt: string;
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
      allMarkdownRemark(sort: {  fields: frontmatter___date, order: DESC  }, limit: 10) {
        edges {
          node {
            excerpt
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
      <ol>
        {allMarkdownRemark.edges.map((edge) => {
          const {
            node: { excerpt, frontmatter, id },
          } = edge;

          return (
            <li key={id}>
              <article>
                <h2>
                  <Link to={`/posts/${id}`}>{frontmatter.title}</Link>
                </h2>
                <p>{excerpt}</p>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default IndexPage;
