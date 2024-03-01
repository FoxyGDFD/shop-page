export interface Product {
  brand: string | null;
  id: string;
  price: number;
  product: string;
}

export interface FieldsParams extends OffsetAndLimits {
  field: keyof Omit<Product, 'id'>;
}

export interface OffsetAndLimits {
  offset?: number;
  limit?: number;
}

export interface ProductFilters extends Partial<Omit<Product, 'id'>> {}
