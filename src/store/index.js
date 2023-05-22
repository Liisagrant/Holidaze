import { configureStore } from '@reduxjs/toolkit';
import VenuesSlice from './modules/VenuesSlice';
import ProfileSlice from './modules/ProfileSlice';
import loaderSlice from './modules/loaderSlice';
import ErrorSlice from './modules/ErrorSlice';

const reducer = {
  Venues: VenuesSlice,
  Profile: ProfileSlice,
  loader: loaderSlice,
  error: ErrorSlice,
};

const store = configureStore({
  reducer,
});

export default store;
