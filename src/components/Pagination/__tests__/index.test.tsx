import { render } from '@testing-library/react';
import React from 'react';
import Pagination from '..';
import pagination from '../__fixtures__';

describe('pagination component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Pagination {...pagination} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
