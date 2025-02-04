import { api } from "../Api";
import { authEndpoints } from "./endpoints";
import type {
  LoginCredentials,
  AuthResponse,
  RegisterCredentials,
} from "./types";

export const authApi = {
  login: (credentials: LoginCredentials) =>
    api.post<AuthResponse>(authEndpoints.login, credentials),

  register: (credentials: RegisterCredentials) =>
    api.post<AuthResponse>(authEndpoints.register, credentials),
  logout: () => api.post(authEndpoints.logout),
};
