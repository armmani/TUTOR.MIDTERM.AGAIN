import axios from "axios";

const BASE_URL =
  "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api";

const authApi = {};

authApi.login = (input) => {
  return axios.post(`${BASE_URL}/V1/auth/login`, input);
};

authApi.register = (input) => {
  return axios.post(`${BASE_URL}/V1/auth/register`, input);
};

export default authApi;
