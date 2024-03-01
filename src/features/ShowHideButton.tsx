import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

export const ShowHideButton: FC<
  Omit<ButtonProps, 'children'> & { isShowAll: boolean }
> = ({ isShowAll, ...props }) => (
  <Button {...props}>{isShowAll ? 'Скрыть' : 'Показать все'}</Button>
);
