import { render } from '@testing-library/react';
import React from 'react';
import Layout from '..';

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2020-01-01'));
});

afterAll(() => {
  jest.useRealTimers();
});

describe('layout component', () => {
  it('should render correctly', () => {
    const { container } = render(<Layout>Content</Layout>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
