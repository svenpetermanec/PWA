export interface LoginUserResponse {
  id: number;
  username: string;
  isAdmin: boolean;
}

export interface LoginUserRequest {
  username: string;
  password: string;
}

export interface RegisterUserRequest extends LoginUserRequest {}

export interface RegisterUserResponse {
  username: string;
  isAdmin: boolean;
}
