import axios from 'axios'
import { refreshToken } from '@/modules/auth/slices/authSlice';

// Remove store import and add getStore function
let storeInstance = null;
export const injectStore = _store => {
  storeInstance = _store;
};

// 🌍 Root Domain from .env

  //  const BASE_ROOT = 'https://bluapi.aas.technology';


const BASE_ROOT =  "http://localhost:8080";

// 1️⃣ Instance 1 - Root domain - /api
export const axiosInstance = axios.create({
  baseURL: `${BASE_ROOT}/api`,
   credentials: "include", // ✅ This ensures cookies are sent
  headers: {
    'Content-Type': 'application/json',
  },
    withCredentials: true,
})

// 2️⃣ Instance 2 - /api
export const axiosInstance2 = axios.create({
  baseURL: `${BASE_ROOT}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, 
})

// 3️⃣ Instance 3 - /meeting 
export const axiosInstance3 = axios.create({
  baseURL: `${BASE_ROOT}`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
})

// 4️⃣ Instance 4 - /public realed thunks like payment
// This instance is used for public APIs that do not require authentication.
export const axiosInstancePublic = axios.create({
  baseURL: `${BASE_ROOT}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
})

const axiosInstanceRefresh = axios.create();

axiosInstanceRefresh.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!storeInstance) {
      return Promise.reject(new Error('Store not initialized'));
    }

    const originalRequest = error.config;
    const status = error.response?.status;

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await storeInstance.dispatch(refreshToken()).unwrap();
        return axiosInstanceRefresh(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Add response interceptors to all axios instances
[axiosInstance, axiosInstance2, axiosInstance3, axiosInstancePublic].forEach(instance => {
  instance.interceptors.response.use(
    response => response,
    error => {
      // Handle case where response or data is null
      if (!error.response?.data) {
        return Promise.reject(new Error('Network error or invalid response'));
      }
      return Promise.reject(error);
    }
  );
});

export default axiosInstanceRefresh;

