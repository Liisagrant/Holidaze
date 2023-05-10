import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const venuesSlice = createSlice({
  name: 'Venues',
  initialState: {
    venues: [],
    singleVenue: null,
    lowPricedHouses: [],
    topRatedHouses: [],
    search: '',
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    addNewVenue: (state, action) => {
      state.venues.push(action.payload);
    },
    removeVenue: (state, action) => {
      state.venues = state.venues.filter(
        (venue) => venue.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVenues.fulfilled, (state, action) => {
      console.log('Fetched venues data:', action.payload);
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
      console.log('Fetched venues data:', action.payload);
      state.singleVenue = action.payload;
    });
  },
});

const accessToken = localStorage.getItem('accessToken');

export const fetchVenues = createAsyncThunk('venues/fetchVenues', async () => {
  try {
    const response = await fetch(
      'https://nf-api.onrender.com/api/v1/holidaze/venues?sort=created&sortOrder=desc&&_owner=true&_bookings=true'
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
});

export const fetchSingleVenue = createAsyncThunk(
  'venues/fetchSingleVenue',
  async (id) => {
    try {
      const response = await fetch(
        `https://nf-api.onrender.com/api/v1/holidaze/venues/${id}?_owner=true&_bookings=true`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
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
    console.log(data);
    dispatch(addNewVenue(data));
    // window.location.href = '/';
  } catch (e) {
    console.log(e);
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
    dispatch(removeVenue(id));
    console.log('venue is deleted');
  } catch (e) {
    console.log(e);
    return 'An error occurred while deleting the venue. Please try again.';
  }
};

export const { setSearch, addNewVenue, removeVenue } = venuesSlice.actions;

export default venuesSlice.reducer;
