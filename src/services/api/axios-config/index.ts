import axios from "axios";
import { Environment } from "../../../environment";

const env = Environment;

const Api = axios.create({
  baseURL: env.URL_BASE,
});

export { Api };
