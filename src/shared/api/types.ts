import { AxiosResponse } from 'axios';

export interface ApiResponse<T>
  extends AxiosResponse<{
    result: T;
  }> {}

export interface ApiRequest<T> {
  action: string;
  params: T;
}
