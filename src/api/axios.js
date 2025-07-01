import axios from "axios";

// هذا الـ instance رح نستخدمه بكل المشروع
const axiosInstance = axios.create({
  baseURL: "https://mytshop.runasp.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
