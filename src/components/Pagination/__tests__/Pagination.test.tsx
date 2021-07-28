import { render } from '@testing-library/react';
import React from 'react';
import Pagination from '..';
import pagination from '../__fixtures__/pagination';

describe('pagination component', () => {
  it('should render correctly', () => {
    const { container } = render(<Pagination {...pagination} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
