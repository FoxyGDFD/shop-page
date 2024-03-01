import { ITEMS_ON_PAGE } from '@shared/constants';
import { FieldsParams } from '@shared/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ProductAPI } from './api';
import { useProductsStore } from './store';

export const useGetIds = () => {
  const { setProducts } = useProductsStore();

  return useQuery({
    queryKey: ['ids'],
    queryFn: () =>
      ProductAPI.getIds().then(data => {
        setProducts(data);
        return data;
      }),
  });
};

export const useGetIdsByTrigger = () => {
  const { setProducts } = useProductsStore();

  return useMutation({
    mutationKey: ['ids'],
    mutationFn: () =>
      ProductAPI.getIds().then(data => {
        setProducts(data);
        return data;
      }),
  });
};

export const useGetProductItems = (curPage: number) => {
  return useMutation({
    mutationKey: ['page-items', curPage],
    mutationFn: (productIds: string[]) =>
      ProductAPI.getItems(
        productIds.slice((curPage - 1) * ITEMS_ON_PAGE, curPage * ITEMS_ON_PAGE)
      ),
  });
};

export const useGetProductFields = () =>
  useQuery({
    queryKey: ['fields'],
    queryFn: () =>
      ProductAPI.getFields().then(data =>
        // Получаем значения фильтров
        Promise.all(
          data.map(
            async (
              field
            ): Promise<[FieldsParams['field'], string[] | number[]]> => [
              field,
              // Тут можно сделать по человечески если апи
              // будет возвращать только уникальные значения фильтра
              // (делать запрос на получение первых 3-5 значений
              // и по нажатию на кнопки получать все значения фильтра)
              [
                ...new Set(
                  await ProductAPI.getFieldValues({
                    field,
                  })
                ),
              ],
            ]
          )
        ).then(filterArray => new Map(filterArray))
      ),
  });

export const useFilterIds = () => {
  const { setProducts } = useProductsStore();

  return useMutation({
    mutationFn: ProductAPI.getFilteredIds,
    onSuccess: data => {
      setProducts(data);
      return data;
    },
  });
};
