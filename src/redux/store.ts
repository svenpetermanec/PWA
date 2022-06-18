import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './reducers/articleReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    article: articleReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
