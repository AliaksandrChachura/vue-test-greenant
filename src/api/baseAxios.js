import axios from 'axios'; 
import qs from 'qs';

const baseAxios = axios.create({
  // timeout: 60_000,
  paramsSerializer: params => qs.stringify(params, {
    arrayFormat: 'repeat',
  }),
});

baseAxios.interceptors.response.use(
  response => response,
  error => {
    const message = (error.response
        && error.response.data
        && error.response.data.errorDescription)
      || error;

    return Promise.reject(error);
  },
);

export default function baseClient(options) {
  const { baseURL = 'https://jsonplaceholder.typicode.com' } = options;
  return baseAxios({
    baseURL,
    ...options,
  });
}
