import type { GatsbyConfig } from 'gatsby';
import { resolve } from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    author: '@gatsbyjs',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-image',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        theme_color: '#663399',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // {
    //   resolve: 'gatsby-plugin-offline',
    // },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
    {
      resolve: 'gatsby-plugin-twitter',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: resolve('src/images'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: resolve('src/posts'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
          },
          {
            resolve: 'gatsby-remark-embedder',
          },
          {
            resolve: 'gatsby-remark-images',
          },
          {
            resolve: 'gatsby-remark-prismjs',
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
  ],
};

export default config;
