import {
  useFilterIds,
  useFilterStore,
  useGetIdsByTrigger,
  useGetProductFields,
} from '@entities/product';
import { FilterItem } from '@features';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { FC, FormEvent } from 'react';

export const Filters: FC = () => {
  const { data } = useGetProductFields();
  const { mutate: filter } = useFilterIds();
  const { mutate: getAllIds } = useGetIdsByTrigger();

  const { resetFilters, filters } = useFilterStore();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (Object.keys(filters).length) filter(filters);
  };

  const clearFilters = () => {
    getAllIds();
    resetFilters();
  };

  if (data)
    return (
      <Grid
        xs={4}
        sm={4}
        md={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography align='center' variant='h4'>
          Фильтры
        </Typography>
        {[...data.entries()].map(([key, value], index) => (
          <FilterItem key={index} name={key} list={value} />
        ))}
        <Button variant='outlined' color='error' onClick={clearFilters}>
          Сбросить фильтры
        </Button>
        <Button onClick={onSubmit} variant='outlined'>
          Найти
        </Button>
      </Grid>
    );
};
