import { PaginationProps } from '../Pagination';

const pagination: PaginationProps = {
  next: {
    fields: {
      slug: 'next-post',
    },
  },
  previous: {
    fields: {
      slug: 'previous-post',
    },
  },
};

export default pagination;
