import { AxiosRequestConfig } from 'axios';
import api from './../util/axios';

export const executeHttpGet = async (url: string, params?: any) => {
  const config: AxiosRequestConfig = {
    params,
  };

  const response = await api.get(url, config);
  return response;
};

export const executeHttpPost = async (url: string, params?: any) => {
  const response = await api.post(url, params);

  return response;
};
