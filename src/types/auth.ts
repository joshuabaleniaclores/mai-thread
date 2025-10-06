export interface AuthCredentials {
  email?: string;
  name?: string;          // corresponds to User.name
  password?: string;
}

export interface AuthResponse<T> {
  statusCode: number;
  data: T;
  message: string;
  success: boolean;
}

// User data returned from auth endpoints
export interface UserData {
  id: string;                // corresponds to User.id
  name?: string;             // User.name
  email?: string;            // User.email
  image?: string | null;     // User.image
  role: "ADMIN" | "CUSTOMER"; 
  loginType: "EMAIL_PASSWORD" | "GOOGLE" | string;
  createdAt: string;
  updatedAt: string;
}

// Login/Signup API response payload
export interface AuthData {
  user: UserData;
  accessToken?: string;
  refreshToken?: string;
}

// Generic auth response
export type LoginResponse = AuthResponse<AuthData>;
export type SignupResponse = AuthResponse<AuthData>;

// Request types
export type LoginRequest = AuthCredentials;
export interface SignupRequest extends AuthCredentials {
  role?: "ADMIN" | "CUSTOMER";
}

// Error type for API calls
export interface ErrorDataResponse {
  statusCode?: number;
  data?: unknown;
  success?: boolean;
  error?: unknown;
  message?: string;
}

export type ErrorResponse = {
  error: true;
  status: number;
  statusText: string;
  data?: ErrorDataResponse;
};
