import { createSlice } from '@reduxjs/toolkit';

const ProfileSlice = createSlice({
  name: 'Profile',
  initialState: {
    singleProfile: null,
  },
  reducers: {
    SET_SINGLE_PROFILE: (state, action) => {
      state.singleProfile = action.payload;
    },
  },
});

export const { SET_SINGLE_PROFILE } = ProfileSlice.actions;
export default ProfileSlice.reducer;

const accessToken = localStorage.getItem('accessToken');

export const fetchSingleProfile = (name, profileData) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://nf-api.onrender.com/api/v1/holidaze/profiles/${name}?_bookings=true&_venues=true`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    dispatch(SET_SINGLE_PROFILE(data));
  } catch (e) {
    console.log(e);
  }
};
