import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Weather, Location, UpComingType, CityState } from "../shared/types";


const initialState: CityState = {
  location: { long: 0, lat: 0 },
  cityName: "",
  cities: [],
  selectedCity: "",
  cityWeather: {
    temp_C: "",
    FeelsLikeC: "",
    weatherStatus: "",
    statusImage: "",
    windspeedKmph: "",
    humidity: "",
    winddir16Point: "",
  },
  upComingWeather: [],
};

export const CitySlice = createSlice({
  name: "City",
  initialState,
  reducers: {
    setLocaion: (state, action: PayloadAction<Location>) => {
      state.location = action.payload;
    },
    setCities: (state, action: PayloadAction<any[]>) => {
      state.cities = action.payload;
    },
    setCityName: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    },
    setSelectedCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },

    setWeather: (state, action: PayloadAction<Weather>) => {
      state.cityWeather = action.payload;
    },
    setUpComingWeather: (state, action: PayloadAction<UpComingType[]>) => {
      state.upComingWeather = action.payload;
    },
  },
});
export const {
  setLocaion,
  setCities,
  setCityName,
  setSelectedCity,
  setWeather,setUpComingWeather
} = CitySlice.actions;

export default CitySlice.reducer;
