
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://example.com/api',
});

export const login = async (username, password) => {
  try {
    const response = await API.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed');
  }
};

export const signup = async (username, password) => {
  try {
    const response = await API.post('/signup', { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Signup failed');
  }
};

export const getUserData = async () => {
  try {
    const response = await API.get('/user');
    return response.data;
  } catch (error) {
    throw new Error('Fetching user data failed');
  }
};

export default API;
