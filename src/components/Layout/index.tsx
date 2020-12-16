import React from 'react';
import Header from '../Header';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header>
        <h1>Gatsby Blog</h1>
      </Header>
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
