import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../slices/authSlice";
import loading from '../slices/loadingSlice';
import area from '../slices/areaSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    loading,
    area
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
