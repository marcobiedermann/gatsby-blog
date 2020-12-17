import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Layout from '../components/Layout';

const NotFoundPage: FC<PageProps> = () => (
  <Layout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
