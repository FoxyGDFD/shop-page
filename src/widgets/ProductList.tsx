import {
  useGetIds,
  useGetProductItems,
  useProductsStore,
} from '@entities/product';
import Grid from '@mui/material/Unstable_Grid2';
import { ProductCard } from '@shared/ui';
import { useGetPage } from '@shared/utils';
import { FC, useEffect } from 'react';

export const ProductList: FC = () => {
  const [curPage] = useGetPage();

  const { productIds } = useProductsStore();
  const { mutate, data: products } = useGetProductItems(curPage);

  useGetIds();

  useEffect(() => {
    mutate(productIds);
  }, [productIds, curPage]);

  return (
    <Grid
      xs={4}
      sm={5}
      md={10}
      container
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        alignSelf: 'flex-start',
        justifySelf: 'center',
        width: '100%',
        margin: '0 auto',
      }}
    >
      {products?.map((product, index) => (
        <Grid xs={4} sm={4} md={4} key={index}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};
