import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchVenues = createAsyncThunk('venues/fetchVenues', async () => {
  try {
    const response = await fetch(
      'https://nf-api.onrender.com/api/v1/holidaze/venues'
    );
    const data = await response.json();
    // let topRated = [];
    // for (let i = 0; i < data.length; i++) {
    //   // use the 'data' variable instead of 'venues'
    //   let venue = data[i];
    //   if (topRated.length < 3) {
    //     topRated.push(venue);
    //     topRated.sort((a, b) => b.rating - a.rating);
    //   } else if (venue.rating > topRated[2].rating) {
    //     topRated.pop();
    //     topRated.push(venue);
    //     topRated.sort((a, b) => b.rating - a.rating);
    //   }
    // }
    // console.log(topRated);
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
  },
  reducers: {},
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

export default venuesSlice.reducer;
