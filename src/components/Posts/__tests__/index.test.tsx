import { render } from '@testing-library/react';
import React from 'react';
import Posts from '..';
import posts from '../__fixtures__';

describe('posts component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Posts {...posts} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
