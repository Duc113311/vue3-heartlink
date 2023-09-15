import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Thay thế bằng URL của API bạn muốn gọi
  timeout: 10000, // Timeout cho các yêu cầu (ms)
});


export default instance;
