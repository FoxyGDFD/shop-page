import { ApiResponse } from '@shared/api';
import { client } from '@shared/api/client';
import {
  FieldsParams,
  OffsetAndLimits,
  Product,
  ProductFilters,
} from '@shared/types';

export interface PoductApi {
  getIds: (params?: OffsetAndLimits) => Promise<string[]>;
  getItems: (ids: string[]) => Promise<Product[]>;
  getFields: (params?: FieldsParams) => Promise<FieldsParams['field'][]>;
  getFieldValues: (params: FieldsParams) => Promise<string[]>;
  getFilteredIds: (params: Partial<ProductFilters>) => Promise<string[]>;
}

export const ProductAPI: PoductApi = {
  getIds: async params => {
    const response = await client.post<OffsetAndLimits, ApiResponse<string[]>>(
      '',
      {
        action: 'get_ids',
        params,
      }
    );
    return response.data.result;
  },
  getItems: async ids => {
    const response = await client.post<string[], ApiResponse<Product[]>>('', {
      action: 'get_items',
      params: { ids },
    });
    return response.data.result;
  },
  getFields: async params => {
    const response = await client.post<
      string[],
      ApiResponse<FieldsParams['field'][]>
    >('', {
      action: 'get_fields',
      params,
    });
    return response.data.result;
  },
  getFieldValues: async params => {
    const response = await client.post<string[], ApiResponse<string[]>>('', {
      action: 'get_fields',
      params,
    });
    return response.data.result;
  },
  getFilteredIds: async params => {
    const response = await client.post<ProductFilters, ApiResponse<string[]>>(
      '',
      {
        action: 'filter',
        params,
      }
    );
    return response.data.result;
  },
};
