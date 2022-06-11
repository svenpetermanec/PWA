import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4200';

axios.interceptors.request.use(
  function (config) {
    console.log(`REQUEST : ${config.url}\n\nJSON : ${JSON.stringify(config)}`);
    return config;
  },
  function (error) {
    console.log(`API request error : ${JSON.stringify(error)}`);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    console.log(
      `[${response.status}] RESPONSE : ${
        response.config.url
      } \n\nJSON : ${JSON.stringify(response)}`
    );
    return response;
  },
  function (error) {
    if (error.response) {
      console.error(`API response error : ${JSON.stringify(error.response)}`);
    } else {
      console.error(`API response error : ${JSON.stringify(error)}`);
    }
    return Promise.reject({
      name: error.name,
      message: error.response?.data.Message,
      code: error.response?.status?.toString(),
      stack: error.stack,
    });
  }
);

export default axios;
