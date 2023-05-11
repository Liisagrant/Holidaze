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

export const logInUser = (userData) => {
  fetch('https://nf-api.onrender.com/api/v1/holidaze/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem('userName', data.name);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('avatar', data.avatar);
      localStorage.setItem('email', data.email);
      localStorage.setItem('venueManager', data.venueManager);
      window.location.href = '/';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

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
