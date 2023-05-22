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

const { actions, reducer } = errorSlice;
export default reducer;

export const setError = (hasError) => (dispatch) => {
  dispatch(SET_ERROR(hasError));
};
