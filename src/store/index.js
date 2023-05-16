import { configureStore } from '@reduxjs/toolkit';
import VenuesSlice from './modules/VenuesSlice';
import ProfileSlice from './modules/ProfileSlice';
import loaderSlice from './modules/loaderSlice';

const reducer = {
  Venues: VenuesSlice,
  Profile: ProfileSlice,
  loader: loaderSlice,
};

const store = configureStore({
  reducer,
});

export default store;
