import axios from 'axios';
import { API_URL } from '../../configs/Environment';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('@nlwheat:token');

    return {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  },
);

export { api };
