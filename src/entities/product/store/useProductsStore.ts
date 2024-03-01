import { create } from 'zustand';

interface ProdutsStore {
  productIds: string[];
  setProducts: (ids: string[]) => void;
}

export const useProductsStore = create<ProdutsStore>()(set => ({
  productIds: [],

  setProducts: products => set({ productIds: products }),
}));
