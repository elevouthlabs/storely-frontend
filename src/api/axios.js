import axios from "axios";

axios.defaults.baseURL = "https://storely-production.up.railway.app/api/v1";


axios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("storelyToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

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
  register: (body) => requests.post("auth/register", body),
  verifyOtp: (body) => requests.post("auth/verify-otp", body),
  resendOtp: (body) => requests.post("auth/resend-otp", body),
  login: (body) => requests.post("auth/login", body),
  currentUser: () => requests.get("auth/me"),
};

export const BusinessRequests = {
  createBusiness: (data) => requests.postForm("business", data),
  getBusiness: (id) => requests.get(`business/${id}`),
  updateBusiness: (id, data) => requests.patchForm(`business/${id}`, data),
  deleteBusiness: (id) => requests.delete(`business/${id}`),
};

export const ProductsRequests = {};
