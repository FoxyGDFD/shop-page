import { Card, CardContent, Typography } from '@mui/material';
import { Product } from '@shared/types';
import { FC } from 'react';

export const ProductCard: FC<Product> = ({ id, product, price, brand }) => (
  <Card
    variant='outlined'
    sx={{
      height: '100%',
      width: '100%',
    }}
  >
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: 3,
        padding: 2,
        gap: 1,
      }}
    >
      <Typography sx={{ fontSize: '14px' }}>{id}</Typography>
      <Typography sx={{ fontSize: '20px' }}>{product}</Typography>
      <Typography sx={{ fontSize: '16px' }}>{price}</Typography>
      {brand && <Typography sx={{ fontSize: '14px' }}>{brand}</Typography>}
    </CardContent>
  </Card>
);
