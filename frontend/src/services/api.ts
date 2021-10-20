import axios from 'axios';
import { API_URL } from '../configs/Environment';

const api = axios.create({
  baseURL: API_URL,
});

export { api };
