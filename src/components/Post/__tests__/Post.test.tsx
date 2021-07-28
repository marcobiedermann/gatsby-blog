import { render } from '@testing-library/react';
import React from 'react';
import Post from '..';
import post from '../__fixtures__/post';

describe('post component', () => {
  it('should render correctly', () => {
    const { container } = render(<Post {...post} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
