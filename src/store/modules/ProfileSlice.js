import { createSlice } from '@reduxjs/toolkit';
import { setLoadingState } from './loaderSlice';

const ProfileSlice = createSlice({
  name: 'Profile',
  initialState: {
    singleProfile: null,
    error: null,
  },
  reducers: {
    SET_SINGLE_PROFILE: (state, action) => {
      state.singleProfile = action.payload;
    },
    ADD_VENUE_TO_PROFILE: (state, action) => {
      if (state.singleProfile) {
        state.singleProfile.venues.push(action.payload);
      }
    },
    SIGNUP_ERROR: (state, action) => {
      state.error = action.payload;
    },
    LOGIN_ERROR: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  SET_SINGLE_PROFILE,
  ADD_VENUE_TO_PROFILE,
  SIGNUP_ERROR,
  LOGIN_ERROR,
} = ProfileSlice.actions;
export default ProfileSlice.reducer;

const accessToken = localStorage.getItem('accessToken');

export const signUpUser = (userData, dispatch) => {
  fetch('https://nf-api.onrender.com/api/v1/holidaze/auth/register', {
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
      window.location.href = '/login';
    })
    .catch((error) => {
      dispatch(SIGNUP_ERROR(error.message));
    });
};

export const logInUser = (userData, dispatch) => {
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
      localStorage.setItem('userName', data.name);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('avatar', data.avatar);
      localStorage.setItem('email', data.email);
      localStorage.setItem('venueManager', data.venueManager);
      window.location = '/';
    })
    .catch((error) => {
      dispatch(LOGIN_ERROR(error.message));
    });
};

export const fetchSingleProfile = (name) => async (dispatch) => {
  dispatch(setLoadingState(true));
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
    dispatch(SET_SINGLE_PROFILE(data));
    dispatch(setLoadingState(false));
  } catch (e) {
    console.error(e);
  }
};

export const fetchBookingOwner = (name, profileData) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://nf-api.onrender.com/api/v1/holidaze/profiles/${name}/venues?_bookings=true&_owner=true`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    dispatch(SET_SINGLE_PROFILE(data));
  } catch (e) {
    console.error(e);
  }
};
