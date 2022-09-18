import * as user from "./user.js";
import * as photo from "./photo.js";
import * as relativeScore from "./relativeScore.js";
import * as absoluteScore from "./absoluteScore.js";
import * as photoRelativeScore from "./photoRelativeScore.js";
import * as keywordPhoto from "./keywordPhoto.js";
import * as profession from "./profession";
import * as keyword from "./keyword.js";
import * as artwork from "./artwork.js";

const apis = {
  user,
  photo,
  relativeScore,
  absoluteScore,
  photoRelativeScore,
  keywordPhoto,
  profession,
  keyword,
  artwork
};

const insertApi = (controller, api) => {
  const output = {};
  const _controller = { ...controller };
  Object.getOwnPropertyNames(_controller).forEach((el) => {
    const fn = _controller[el];
    output[el] = async (data, headers = {}, params = {}) =>
      await fn(api, data, headers, params);
  });

  return output;
};

export default {
  install: (app) => {
    const axios = app.config.globalProperties.axios;
    const cookiz = app.config.globalProperties.$cookies;

    // TODO: change this to your api url
    const baseURL = import.meta.env.DEV
      ? "http://localhost:7001"
      : "https://ctf-temp.arui.dev";

    const service = axios.create({
      baseURL: baseURL,
      timeout: 30000,
    });

    // request interceptor
    service.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        const token = cookiz.get("token");

        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
          config.headers["Access-Control-Allow-Origin"] = "*";
        }

        return config;
      },
      (error) => {
        // Do something with request error
        // console.error("error:", error); // for debug
        Promise.reject(error);
      }
    );

    // response interceptor
    service.interceptors.response.use(
      (response) => response.data,
      (error) => {
        // console.log('err' + error);// for debug
        return Promise.reject(
          error.response ? error.response.data || error.response : error
        );
      }
    );

    const api = async (
      method = "post",
      url,
      data,
      headers = {},
      params = {}
    ) => {
      try {
        const result = await service.request({
          method,
          url,
          data,
          params: method.toLowerCase() === "get" ? data : params,
          headers,
        });
        return result;
      } catch (error) {
        if (process.env.NODE_ENV !== "production") console.error(error);
        throw error;
      }
    };

    api.get = (url, data, params = {}) => api("get", url, data, params);
    api.post = (url, data, headers = {}, params = {}) =>
      api("post", url, data, headers, params);
    api.put = (url, data, params = {}) => api("put", url, data, params);
    // api.delete = (url, data, params = {}) =>
    //   api('delete', url, data, (params = {}));

    Object.keys(apis).forEach((name) => {
      api[name] = insertApi(apis[name], api);
    });

    app.provide("$api", api);
    app.config.globalProperties.$api = api;
    app.$api = api;
    if (typeof window !== "undefined") {
      window.$api = api;
    }

    app.provide("baseUrl", baseURL);
    app.config.globalProperties.$baseURL = baseURL;
    app.$baseURL = baseURL;
    if (typeof window !== "undefined") {
      window.$baseURL = baseURL;
    }
  },
};
