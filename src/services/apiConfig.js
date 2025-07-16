// API configuration
const API_CONFIG = {
  // Base URL for the API - will be used when real backend is available
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  
  // API endpoints
  ENDPOINTS: {
    BOOKS: '/books',
    BOOK_BY_ID: (id) => `/books/${id}`,
  },
  
  // Request configuration
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
  },
  
  // Enable mock mode when no backend is available
  USE_MOCK: true, // Set to false when real backend is ready
};

export default API_CONFIG;