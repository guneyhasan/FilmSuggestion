import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5050/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor - hata yönetimi için
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Hatası:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API fonksiyonları
export const authAPI = {
  login: (credentials) => instance.post('/users/login', credentials),
  register: (userData) => instance.post('/users/register', userData),
  getProfile: () => instance.get('/users/profile'),
  updateProfile: (userData) => instance.put('/users/update', userData)
};

export const moviesAPI = {
  getAll: () => instance.get('/movies'),
  getById: (id) => instance.get(`/movies/${id}`),
  create: (movieData) => instance.post('/movies', movieData),
  update: (id, movieData) => instance.put(`/movies/${id}`, movieData),
  delete: (id) => instance.delete(`/movies/${id}`)
};

export const blogsAPI = {
  getAll: () => instance.get('/blogs'),
  getById: (id) => instance.get(`/blogs/${id}`),
  create: (blogData) => instance.post('/blogs', blogData),
  update: (id, blogData) => instance.put(`/blogs/${id}`, blogData),
  delete: (id) => instance.delete(`/blogs/${id}`)
};

export default instance; 