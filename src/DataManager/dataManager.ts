import axios, { AxiosRequestConfig } from 'axios';
import { baseUrl, apiKey } from '../Constants/ConstantValues';

interface ApiRequest {
  category?: string;
  page?: number;
}

export const dataManagerApiRequest = async ({ category, page = 1 }: ApiRequest) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    maxBodyLength: Infinity,
    url: buildUrl(category, page),
  };
  try {
    const response = await axios.request(config);
    return response;
  } catch (error:any) {
    console.log('An error occurred:', error?.response?.data);
    return error?.response.data;
  }
};

const buildUrl = (category?: string, page: number = 1) => {
  return `${baseUrl}top-headlines?language=en${category ? '&category=' + category : ''}&apiKey=${apiKey}`;
};
