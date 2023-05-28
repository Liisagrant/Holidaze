import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SET_ERROR } from './errorSlice';

const venuesSlice = createSlice({
  name: 'Venues',
  initialState: {
    venues: [],
    singleVenue: null,
    lowPricedHouses: [],
    topRatedHouses: [],
    search: '',
    createVenue: null,
    error: null,
  },
  reducers: {
    SET_SEARCH: (state, action) => {
      state.search = action.payload;
    },
    ADD_NEW_VENUE: (state, action) => {
      state.venues.push(action.payload);
    },
    REMOVE_VENUE: (state, action) => {
      state.venues = state.venues.filter(
        (venue) => venue.id !== action.payload
      );
    },
    UPDATE_VENUE: (state, action) => {
      state.createVenue = action.payload;
    },
    BOOK_VENUE: (state, actions) => {
      state.updateVenue = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVenues.fulfilled, (state, action) => {
      state.venues = action.payload;

      let lowestPrice = Infinity;
      let lowPricedHouses = [];
      let highestScore = -Infinity;
      let topRatedHouses = [];

      for (let i = 0; i < action.payload.length; i++) {
        const house = action.payload[i];
        if (house.price < lowestPrice) {
          lowestPrice = house.price;
          lowPricedHouses = [house];
        } else if (house.price === lowestPrice) {
          lowPricedHouses.push(house);
        }

        if (house.rating > highestScore) {
          highestScore = house.rating;
          topRatedHouses = [house];
        } else if (house.rating === highestScore) {
          topRatedHouses.push(house);
        }
      }

      state.lowPricedHouses = lowPricedHouses;
      state.topRatedHouses = topRatedHouses;
    });

    builder.addCase(fetchSingleVenue.fulfilled, (state, action) => {
      state.singleVenue = action.payload;
    });
  },
});

const accessToken = localStorage.getItem('accessToken');

export const fetchVenues = createAsyncThunk(
  'venues/fetchVenues',
  async (_, { dispatch }) => {
    const response = await fetch(
      'https://nf-api.onrender.com/api/v1/holidaze/venues?sort=created&sortOrder=desc&&_owner=true&_bookings=true'
    );

    if (!response.ok) {
      dispatch(
        SET_ERROR({
          isError: true,
        })
      );
      throw new Error('Failed to fetch venues');
    }

    const data = await response.json();
    return data;
  }
);

export const fetchSingleVenue = createAsyncThunk(
  'venues/fetchSingleVenue',
  async (id) => {
    const response = await fetch(
      `https://nf-api.onrender.com/api/v1/holidaze/venues/${id}?_owner=true&_bookings=true`
    );
    const data = await response.json();
    return data;
  }
);

export const createVenue = (venueData) => async (dispatch) => {
  try {
    const response = await fetch(
      'https://nf-api.onrender.com/api/v1/holidaze/venues',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(venueData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    dispatch(ADD_NEW_VENUE(data));

    return data;
  } catch (e) {
    console.error(e);
  }
};

export const deleteVenue = (id) => async (dispatch) => {
  try {
    await fetch(`https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(REMOVE_VENUE(id));
  } catch (e) {
    console.error(e);
  }
};

export const updateVenue = (id, venueData) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(venueData),
      }
    );
    const data = await response.json();
    dispatch(UPDATE_VENUE(data));
  } catch (e) {
    console.error(e);
  }
};

export const bookVenue = (venueData) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://nf-api.onrender.com/api/v1/holidaze/bookings`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(venueData),
      }
    );
    const data = await response.json();
    dispatch(BOOK_VENUE(data));
  } catch (e) {
    console.error(e);
  }
};

export const {
  SET_SEARCH,
  ADD_NEW_VENUE,
  REMOVE_VENUE,
  UPDATE_VENUE,
  BOOK_VENUE,
} = venuesSlice.actions;

export default venuesSlice.reducer;
