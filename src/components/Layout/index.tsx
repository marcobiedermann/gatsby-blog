import dayjs from 'dayjs';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import Footer from '../Footer';
import Grid from '../Grid';
import Header from '../Header';
import Main from '../Main';
import styles from './style.module.css';

const Layout: FC = (props) => {
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
          <p>
            © {dayjs().format('YYYY')}, Built with{' '}
            <a href="https://www.gatsbyjs.com" rel="noopener noreferrer" target="_blank">
              Gatsby
            </a>
          </p>
        </Grid>
      </Footer>
    </div>
  );
};

export default Layout;
