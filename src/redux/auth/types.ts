export interface AuthUser {
    token: string;
    email: string;
    userId: string;
    role: string;
    message: string;
    completed: boolean;
    authenticated: boolean;
    verified: boolean;
  }