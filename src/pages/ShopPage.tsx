import { PagesCounter } from '@features';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Filters, ProductList } from '@widgets';
import { FC } from 'react';

export const ShopPage: FC = () => (
  <Container
    maxWidth='xl'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
    }}
  >
    <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Filters />
      <ProductList />
    </Grid>
    <PagesCounter />
  </Container>
);
