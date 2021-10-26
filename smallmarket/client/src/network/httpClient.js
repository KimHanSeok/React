import axios from 'axios';

axios.defaults.withCredentials = true;

export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  createAxios() {
    const axiosAgent = axios.create({
      baseURL: this.baseURL,
    });
    axiosAgent.defaults.timeout = 2500;

    return axiosAgent;
  }
};