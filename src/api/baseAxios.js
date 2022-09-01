import axios from 'axios'; 
import qs from 'qs';

const baseAxios = axios.create({
  // timeout: 60_000,
  paramsSerializer: params => qs.stringify(params, {
    arrayFormat: 'repeat',
  }),
});

baseAxios.interceptors.response.use(
  response => {
    const isSuccessStatus = /^2/.test(response.status.toString())
    if (isSuccessStatus && (response.config.method === 'post' || response.config.method === 'put')) {
      alert("the value is put or post successfully") // по хорошему добавить стороннюю библиотеку (@kyvg/vue3-notification не сработал)
    }
    return response;
  },
  error => {
    const message = (error.response
        && error.response.data
        && error.response.data.errorDescription)
      || error;

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
