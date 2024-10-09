import axios from "axios";
import { Environment } from "../../../environment";

const env = Environment;

const Api = axios.create({
  baseURL: env.URL_BASE,
  headers: {
    Authorization: env.ACCESS_TOKEN,
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use(
  (config) => {
    // Log the full Axios request details
    console.log("Full Axios Request:");
    console.log("URL:", config.url);
    console.log("Method:", config.method);
    console.log("Headers:", JSON.stringify(config.headers, null, 2));
    if (config.data) {
      console.log("Request Data:", JSON.stringify(config.data, null, 2));
    }
    return config;
  },
  (error) => {
    // Handle request error
    console.error("Error in Axios request:", error);
    return Promise.reject(error);
  }
);

export { Api };
