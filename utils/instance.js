import axios from "axios";
import {URL} from "../config/config";

const http = axios.create({
  baseURL: URL,
});
export default http;
