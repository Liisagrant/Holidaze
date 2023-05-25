import { createSlice } from '@reduxjs/toolkit';

const errorSlice = createSlice({
  name: 'error',
  initialState: {
    isError: false,
  },
  reducers: {
    SET_ERROR: (state, action) => {
      state.isError = action.payload;
    },
  },
});

export const { SET_ERROR } = errorSlice.actions;
export default errorSlice.reducer;
