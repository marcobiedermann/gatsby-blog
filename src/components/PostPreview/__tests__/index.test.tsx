import { render } from '@testing-library/react';
import React from 'react';
import PostPreview from '..';
import postPreview from '../__fixtures__';

describe('post preview component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<PostPreview {...postPreview} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
