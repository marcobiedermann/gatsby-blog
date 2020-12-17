import { Link } from 'gatsby';
import React from 'react';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import styles from './style.module.css';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <Header>
        <Grid>
          <Link to="/">Gatsby Blog</Link>
        </Grid>
      </Header>
      <Main>
        <Grid>{children}</Grid>
      </Main>

      <Footer>
        <Grid>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Grid>
      </Footer>
    </div>
  );
};

export default Layout;
