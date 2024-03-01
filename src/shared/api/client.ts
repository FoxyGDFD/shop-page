import { API_PASSWORD, SERVER_API_URL } from '@shared/constants';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import md5 from 'md5';

export type ApiError = AxiosError & {
  config: { _retry?: boolean };
};

export const client = axios.create({
  baseURL: SERVER_API_URL,
});

client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const date = new Date();
  const month =
    date.getUTCMonth() < 9
      ? `0${date.getUTCMonth() + 1}`
      : date.getUTCMonth() + 1;

  const timestamp = [date.getUTCFullYear(), month, date.getUTCDate()].join('');

  config.headers['X-Auth'] = md5(`${API_PASSWORD}_${timestamp}`);

  return config;
});

client.interceptors.response.use(
  response => response,
  async (error: ApiError) => {
    console.error(error.code, error.message);

    // client(error.config);
  }
);
