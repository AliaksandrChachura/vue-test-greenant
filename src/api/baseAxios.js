import axios from 'axios'; 
import qs from 'qs';
import { notify } from "@kyvg/vue3-notification";

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

    notify({
      type: 'error',
      title: 'Error',
      text: message,
      duration: 3000,
    });

    return Promise.reject(error);
  },
);

export default function baseClient(options) {
  const { baseURL } = options;
  return baseAxios({
    baseURL,
    ...options,
  });
}
