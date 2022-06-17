import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './reducers/articleReducer';

export const store = configureStore({
  reducer: {
    article: articleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
