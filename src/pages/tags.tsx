import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';

interface Tag {
  fieldValue: string;
  totalCount: number;
}

interface AllMarkdownRemark {
  group: Tag[];
}

interface StaticQuery {
  allMarkdownRemark: AllMarkdownRemark;
}

export interface TagsPageProps extends PageProps {}

function TagsPage() {
  const { allMarkdownRemark } = useStaticQuery<StaticQuery>(graphql`
    query {
      allMarkdownRemark {
        group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Tags</h1>
      <ul>
        {allMarkdownRemark.group.map((tag) => {
          const { fieldValue, totalCount } = tag;

          return (
            <li key={fieldValue}>
              <Link to={`/tags/${fieldValue}`}>
                {fieldValue} ({totalCount})
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export default TagsPage;
