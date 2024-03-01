import { useProductsStore } from '@entities/product';
import { Pagination } from '@mui/material';
import { ITEMS_ON_PAGE } from '@shared/constants';
import { useGetPage } from '@shared/utils';
import { FC } from 'react';

export const PagesCounter: FC = () => {
  const { productIds } = useProductsStore();
  const [curPage, setPage] = useGetPage();

  return (
    <Pagination
      onChange={(_, page) => setPage(page)}
      sx={{ margin: '0 auto' }}
      variant='outlined'
      shape='rounded'
      color='primary'
      page={curPage}
      count={Math.ceil(productIds.length / ITEMS_ON_PAGE)}
    />
  );
};
