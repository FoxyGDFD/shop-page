import { ProductFilters } from '@shared/types';
import { create } from 'zustand';

interface FiltersStore {
  filters: Partial<ProductFilters>;
  setFilterValue: (key: keyof ProductFilters, value: unknown) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FiltersStore>()(set => ({
  filters: {},
  setFilterValue: (key, value) =>
    set(({ filters }) => ({
      filters: Object.assign(filters, { [key]: value }),
    })),
  resetFilters: () => set({ filters: {} }),
}));
