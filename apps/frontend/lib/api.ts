import axios, { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

// API client configuration
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add authorization token to headers if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle unauthorized errors
    if (error.response && error.response.status === 401) {
      // Redirect to login page or perform any other action
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// Authentication API functions
export const login = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/login/', { email, password });
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await apiClient.post('/auth/register/', { email, password });
  return response.data;
};

// Hosting Plan API functions
export const getHostingPlans = async () => {
  const response = await apiClient.get('/hostingplans/');
  return response.data;
};

export const getHostingPlan = async (id: string | number) => {
  const response = await apiClient.get(`/hostingplans/${id}/`);
  return response.data;
};

// Domain API functions
export const getDomains = async () => {
  const response = await apiClient.get('/domains/');
  return response.data;
};

export const getDomain = async (id: string | number) => {
  const response = await apiClient.get(`/domains/${id}/`);
  return response.data;
};

// Testimonial API functions
export const getTestimonials = async () => {
  const response = await apiClient.get('/testimonials/');
  return response.data;
};

export const getTestimonial = async (id: string | number) => {
  const response = await apiClient.get(`/testimonials/${id}/`);
  return response.data;
};

// Contact API functions
export const createContact = async (name: string, email: string, subject: string, message: string) => {
  const response = await apiClient.post('/contact/', { name, email, subject, message });
  return response.data;
};

export default apiClient;
