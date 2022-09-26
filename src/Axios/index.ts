import axios from 'axios';

const customAxios = axios.create({
  baseURL: `${process.env.REACT_APP_INTERCEPTORS}`
});

const reqInterceptor = customAxios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('access_token');
    config.headers = {
      'x-access-token': `${token}`
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

createAxiosResponseInterceptor();

function createAxiosResponseInterceptor() {
  customAxios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.data.message === 'Unauthorized! Access Token was expired!') {
        customAxios.interceptors.response.eject(reqInterceptor);

        return axios
          .post(`${process.env.REACT_APP_INTERCEPTORS}auth/refresh`, undefined, {
            headers: {
              'x-access-token': `${localStorage.getItem('refresh_token')}`
            }
          })
          .then((response) => {
            console.log('ref res', response);
            console.log('changing token', response.data);
            localStorage.setItem('access_token', response.data.data.token);
            localStorage.setItem('refresh_token', response.data.data.refreshToken);
            error.response.config.headers['x-access-token'] = localStorage.getItem('access_token');
            return axios(error.response.config);
          })
          .catch((errors) => {
            console.log('ref error', errors);
            if (errors.response.data.status === 'Refresh token expired') {
              localStorage.clear();
              window.location.pathname = '/login';
              return error.response.data;
            }

            return Promise.reject(error);
          })
          .finally(createAxiosResponseInterceptor);
      }
      return Promise.reject(error);
    }
  );
}

export default customAxios;
