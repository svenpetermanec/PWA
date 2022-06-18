import { LoginUserRequest, RegisterUserRequest } from '../models/userModel';
import { executeHttpPost } from '../requests';
import { loginUserRoute, registerUserRoute } from './user.service.route';

export const loginUser = async (params: LoginUserRequest) => {
  return await executeHttpPost(loginUserRoute, params);
};

export const registerUser = async (params: RegisterUserRequest) => {
  return await executeHttpPost(registerUserRoute, params);
};
