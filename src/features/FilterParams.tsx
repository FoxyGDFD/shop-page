import { useFilterStore } from '@entities/product';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { ProductFilters } from '@shared/types';
import { FC, useState } from 'react';
import { ShowHideButton } from './ShowHideButton';

export interface FilterValuesProps {
  name: keyof ProductFilters;
  list: Array<number | string>;
}

export const FilterItem: FC<FilterValuesProps> = ({ name, list }) => {
  const showButton = list.length > 3;
  const [visibleList, setVisibleList] = useState(
    showButton ? list.slice(0, 3) : list
  );
  const showHideButton = () => {
    setVisibleList(visibleList.length > 3 ? list.slice(0, 3) : list);
  };

  const { setFilterValue, ...filters } = useFilterStore();
  const changeFilterValue = (value: unknown) => () => {
    if (value === filters[name]) setFilterValue(name, '');
    else setFilterValue(name, value);
  };

  return (
    <FormControl sx={{ borderBottom: '1px solid black' }}>
      <FormLabel id={name}>{name}</FormLabel>
      <RadioGroup aria-label={name} name={name} value={filters[name]}>
        {visibleList.map((label, index) => (
          <FormControlLabel
            key={index}
            control={
              <Radio
                value={label}
                checked={filters[name] === label}
                onClick={changeFilterValue(label)}
              />
            }
            label={label}
          />
        ))}
      </RadioGroup>
      {showButton && (
        <ShowHideButton
          onClick={showHideButton}
          isShowAll={visibleList.length > 3}
        />
      )}
    </FormControl>
  );
};
