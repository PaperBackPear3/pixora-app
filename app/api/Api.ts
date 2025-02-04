// api.ts

import axios, {
  type AxiosInstance,
  type AxiosResponse,
  AxiosError,
} from "axios";

// Environment configuration
// In a real app, you'd typically load these from environment variables
const ENV = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
  STAGING: "staging",
};

// API URLs for different environments
const API_URLS = {
  [ENV.DEVELOPMENT]: process.env.DEV_API_URL || "http://localhost:3000/api",
  [ENV.STAGING]:
    process.env.STAGING_API_URL || "https://staging-api.yourapp.com",
  [ENV.PRODUCTION]: process.env.PROD_API_URL || "https://api.yourapp.com",
};

// Current environment - you might want to load this from your app config
const currentEnvironment = ENV.DEVELOPMENT;

// Request timeout in milliseconds
const REQUEST_TIMEOUT = 30000;

// Create a class to manage API configuration and instances
class ApiService {
  private static instance: ApiService;
  private axiosInstance: AxiosInstance;

  private constructor() {
    // Create axios instance with default configuration
    this.axiosInstance = axios.create({
      baseURL: API_URLS[currentEnvironment],
      timeout: REQUEST_TIMEOUT,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // // Add request interceptor
    // this.axiosInstance.interceptors.request.use(
    //   (config) => {
    //     // You can modify the request config here
    //     // For example, add authentication token
    //     const token = this.getAuthToken();
    //     if (token) {
    //       config.headers.Authorization = `Bearer ${token}`;
    //     }
    //     return config;
    //   },
    //   (error: AxiosError) => {
    //     return Promise.reject(error);
    //   }
    // );

    // Add response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // You can modify the response data here
        return response;
      },
      (error: AxiosError) => {
        // Handle common error scenarios
        if (error.response?.status === 401) {
          // Handle unauthorized access
          this.handleUnauthorized();
        }
        return Promise.reject(error);
      }
    );
  }

  // Implement the Singleton pattern
  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  // Get the axios instance
  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }

  // Helper method to get auth token - implement your own logic
  private getAuthToken(): string | null {
    // Implement your token retrieval logic here
    return null;
  }

  // Handle unauthorized access - implement your own logic
  private handleUnauthorized(): void {
    // Implement your unauthorized access handling logic here
    // For example: clear local storage and redirect to login
  }
}

// Export the API service instance
export const apiService = ApiService.getInstance();

// Export a pre-configured axios instance
export const api = apiService.getAxiosInstance();
