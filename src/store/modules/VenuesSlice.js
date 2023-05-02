import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchVenues = createAsyncThunk('venues/fetchVenues', async () => {
  try {
    const response = await fetch(
      'https://nf-api.onrender.com/api/v1/holidaze/venues'
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
        `https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

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
export const { setSearch } = venuesSlice.actions;

export default venuesSlice.reducer;
