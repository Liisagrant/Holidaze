import { configureStore } from '@reduxjs/toolkit';
import VenuesSlice from './modules/VenuesSlice';
import ProfileSlice from './modules/ProfileSlice';
import loaderSlice from './modules/loaderSlice';
import errorSlice from './modules/errorSlice';

const reducer = {
  Venues: VenuesSlice,
  Profile: ProfileSlice,
  loader: loaderSlice,
  error: errorSlice,
};

const store = configureStore({
  reducer,
});

export default store;
