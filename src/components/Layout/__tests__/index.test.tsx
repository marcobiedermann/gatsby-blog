import { render } from '@testing-library/react';
import React from 'react';
import Layout from '..';

describe('layout component', () => {
  it('should render correctly', () => {
    const { container } = render(<Layout>Content</Layout>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
