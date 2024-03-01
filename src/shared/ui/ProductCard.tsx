import { Paper, Typography } from '@mui/material';
import { Product } from '@shared/types';
import { FC } from 'react';

export const ProductCard: FC<Product> = ({ id, product, price, brand }) => (
  <Paper
    variant='outlined'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      justifyContent: 'center',
      padding: 1,
      borderRadius: 3,
      height: '100%',
    }}
  >
    <Typography sx={{ fontSize: '14px' }}>{id}</Typography>
    <Typography sx={{ fontSize: '20px' }}>{product}</Typography>
    <Typography sx={{ fontSize: '16px' }}>{price}</Typography>
    {brand && <Typography sx={{ fontSize: '14px' }}>{brand}</Typography>}
  </Paper>
);
