import { render } from '@testing-library/react';
import React from 'react';
import Tags from '..';
import tags from '../__fixtures__/tags';

describe('tags component', () => {
  it('should render correctly', () => {
    const { container } = render(<Tags {...tags} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
