import { ProductFilters } from '@shared/types';
import { create } from 'zustand';

interface FiltersStore extends Partial<ProductFilters> {
  setFilterValue: (key: keyof ProductFilters, value: unknown) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FiltersStore>()(set => ({
  setFilterValue: (key, value) => set({ [key]: value }),
  resetFilters: () =>
    set({ brand: undefined, price: undefined, product: undefined }),
}));
