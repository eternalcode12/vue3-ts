/**
 * author: zyj
 * date: 2022-07-23
 * description: axios package
 */

import axios from "axios";
import { ElMessage } from "element-plus";
import store from "@/store";

const config: Object = {
  baseURL: "http://localhost:8099/v1",
  timeout: 10 * 1000,
};

// create a new axios instance
const instance = axios.create(config);

// request interceptor
instance.interceptors.request.use((config: any) => {
  // define a custom header
  config.headers["Content-Type"] = "application/json";
  // TODO: add your custom header here, example: token, Authorization etc.
  config.headers["Authorization"] = store.state.userInfo.token;
  return config;
});

// response interceptor
instance.interceptors.response.use(
  (response: any) => {
    if (response.data.code == 200) {
      return Promise.resolve(response.data);
    } else {
      ElMessage.error(response.data.msg);
      return Promise.reject(response.data);
    }
  },
  (error: any) => {
    // do something with response error
    return Promise.reject(error);
  }
);

export default instance;
