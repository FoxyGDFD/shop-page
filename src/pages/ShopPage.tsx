import { PagesCounter } from '@features';
import { Box, Container } from '@mui/material';
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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
      }}
    >
      <Filters />
      <ProductList />
    </Box>
    <PagesCounter />
  </Container>
);
