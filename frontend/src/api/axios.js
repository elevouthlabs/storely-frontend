import axios from "axios";


axios.defaults.baseURL = "https://storely-backend-production-154f.up.railway.app/api/v1";

const REFRESH_PATH = "auth/refresh";

const getStoredToken = () => localStorage.getItem("storelyToken");
const setStoredToken = (token) => localStorage.setItem("storelyToken", token);
const clearStoredToken = () => localStorage.removeItem("storelyToken");

const getAccessTokenFromRefreshResponse = (response) => {
  const payload = response?.data?.data || response?.data || {};
  return payload?.accessToken || null;
};

axios.interceptors.request.use(async (config) => {
  const token = getStoredToken();
  console.log('Request to:', config.url);
  console.log('Token exists:', !!token);
  console.log('Token:', token?.substring(0, 20) + '...');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    console.log('Response from:', response.config.url);
    console.log('Response status:', response.status);
    return response;
  },
  async (error) => {
    const originalRequest = error?.config;
    const status = error?.response?.status;

    if (!originalRequest || status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (originalRequest.url?.includes(REFRESH_PATH)) {
      clearStoredToken();
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      const refreshResponse = await axios.post(
        REFRESH_PATH,
        {}
      );
      const newToken = getAccessTokenFromRefreshResponse(refreshResponse);

      if (newToken) {
        setStoredToken(newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
      }

      return axios(originalRequest);
    } catch (refreshError) {
      clearStoredToken();
      return Promise.reject(refreshError);
    }
  }
);

const responseBody = (response) => response.data;

const requests = {
  get: (url, params) => axios.get(url, { params }).then(responseBody),

  post: (url, body) => axios.post(url, body).then(responseBody),

  put: (url, body) => axios.put(url, body).then(responseBody),

  patch: (url, body) => axios.patch(url, body).then(responseBody),

  delete: (url) => axios.delete(url).then(responseBody),

  postForm: (url, data) =>
    axios
      .post(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(responseBody),

  patchForm: (url, data) =>
    axios
      .patch(url, data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(responseBody),
};

export const AuthRequests = {
  register: (body) => requests.post("auth/signup", body),
  verifyOtp: (body) => requests.post("auth/verify-otp", body),
  resendOtp: (body) => requests.post("auth/resend-otp", body),
  login: (body) => requests.post("auth/login", body),
  refresh: () => requests.post(REFRESH_PATH, {}),
  currentUser: () => requests.get("auth/me"),
};

export const BusinessRequests = {
  createBusiness: (data) => requests.postForm("business", data),
  getBusiness: (id) => requests.get(`business/${id}`),
  updateBusiness: (id, data) => requests.patchForm(`business/${id}`, data),
  deleteBusiness: (id) => requests.delete(`business/${id}`),
};

export const ProductsRequests = {
  createItem: (data) => requests.postForm("items", data),
};