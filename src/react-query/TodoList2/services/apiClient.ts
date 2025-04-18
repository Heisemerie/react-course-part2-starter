import axios, { CanceledError } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//use the APIClient class to send various typed of HTTP requests to a particular endpoint
class APIClient<T> {
  //property type declaration
  endpoint: string;

  constructor(endpoint: string) {
    //property declaration and initialization
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  Post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
