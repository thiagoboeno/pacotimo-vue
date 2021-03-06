import axios from 'axios';
import { API_URL } from '../config/env';

export default axios.create({
  baseURL: API_URL,
  timeout: 60000
});
