import { render } from '@testing-library/react';
import React from 'react';
import Posts from '..';
import posts from '../__fixtures__/posts';

describe('posts component', () => {
  it('should render correctly', () => {
    const { container } = render(<Posts {...posts} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
