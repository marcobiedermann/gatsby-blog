import { render } from '@testing-library/react';
import React from 'react';
import Section from '..';

describe('section component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Section>Section</Section>);

    expect(asFragment()).toMatchSnapshot();
  });
});
