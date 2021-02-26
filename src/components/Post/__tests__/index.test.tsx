import { render } from '@testing-library/react';
import React from 'react';
import Post from '..';
import post from '../__fixtures__';

describe('post component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Post {...post} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
