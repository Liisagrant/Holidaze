import { configureStore } from '@reduxjs/toolkit';
import VenuesSlice from './modules/VenuesSlice';
import ProfileSlice from './modules/ProfileSlice';

const reducer = {
  Venues: VenuesSlice,
  Profile: ProfileSlice,
};

const store = configureStore({
  reducer,
});

export default store;
