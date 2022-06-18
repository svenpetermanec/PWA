import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { loginUserThunk, registerUserThunk } from '../actions/userAction';

export enum LoggedInStateEnum {
  Uninitialized = 0,
  Pending = 1,
  LoggedIn = 2,
  Unauthorized = 3,
  Expired = 4,
}

interface UserState {
  loggedInState: LoggedInStateEnum;
  isAdmin: boolean;
}

const initialState: UserState = {
  loggedInState: LoggedInStateEnum.Uninitialized,
  isAdmin: false,
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.loggedInState = LoggedInStateEnum.LoggedIn;
      state.isAdmin = action.payload.isAdmin;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.loggedInState = LoggedInStateEnum.Unauthorized;
      toast.error('Račun ne postoji');
    });
    builder.addCase(registerUserThunk.fulfilled, () => {
      toast.success('Račun kreiran');
    });
  },
});

const { reducer } = userReducer;

export default reducer;
