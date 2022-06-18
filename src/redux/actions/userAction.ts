import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';
import {
  LoginUserRequest,
  LoginUserResponse,
  RegisterUserRequest,
  RegisterUserResponse,
} from '../models/userModel';
import { loginUser, registerUser } from '../services/user.service';

export const loginUserThunk: AsyncThunk<
  LoginUserResponse,
  LoginUserRequest,
  {}
> = createAsyncThunk<LoginUserResponse, LoginUserRequest>(
  '/user/login',
  async (request, thunkApi) => {
    const response = await loginUser(request);
    return response.data;
  }
);

export const registerUserThunk: AsyncThunk<
  RegisterUserResponse,
  RegisterUserRequest,
  {}
> = createAsyncThunk<RegisterUserResponse, RegisterUserRequest>(
  '/user/register',
  async (request, thunkApi) => {
    const response = await registerUser(request);
    return response.data;
  }
);
