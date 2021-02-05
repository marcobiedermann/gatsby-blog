import { render } from '@testing-library/react';
import React from 'react';
import Tags from '..';

describe('tags component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Tags tags={[]} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
