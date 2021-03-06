/*
 * @Author: yaodongyi
 * @Date: 2019-07-26 16:12:05
 * @Description:axios请求相应拦截器
 */
import axios from 'axios';
import qs from 'qs';

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = process.env.VUE_APP_API;
} else {
  axios.defaults.baseURL = '/api';
}

axios.interceptors.request.use(
  request => {
    request.headers = {
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Content-Type': 'application/json; charset=UTF-8', //json
      Accept: 'application/json'
    };
    // request.data = qs.stringify(request.data);
    console.log(`%c 发送 ${request.url.replace(process.env.VUE_APP_API, '')} `, 'background:#00CC6E;color:#ffffff', request);
    return request;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    console.log(`%c 接收 ${response.config.url.replace(process.env.VUE_APP_API, '')} `, 'background:#1E1E1E;color:#bada55', response);
    return response.data;
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default axios;


