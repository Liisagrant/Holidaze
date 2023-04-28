import { configureStore } from '@reduxjs/toolkit';
import VenuesSlice from './modules/VenuesSlice';

const reducer = {
  Venues: VenuesSlice,
};

const store = configureStore({
  reducer,
});

export default store;
