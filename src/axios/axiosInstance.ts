import axios from "axios";
import countries from "all-countries-and-cities-json";

// ----------------------------------------------------------------------
import { Location, RequestType } from "../shared/types";
const RootBath =
  "http://api.worldweatheronline.com/premium/v1/weather.ashx?key=6cf10a6bb13f4d0788f112958222705";
const axiosInstance = axios.create();
axiosInstance.defaults.headers.common.Accept = "*/*";
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
const getCities = (country: string) => {
  const keys = Object.keys(countries);
  const values = Object.values(countries);
  const countryIndx = keys.findIndex((element) => element == country);
  return values[countryIndx];
};
export const GetCityName = async (location: Location) => {
  if (location.lat !== 0 && location.long !== 0) {
    try {
      const response = await axiosInstance.get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.lat}&longitude=${location.long}&localityLanguage=en`
      );

      const cityList = getCities(response.data?.countryName);
      return {
        cityName: response.data?.city?response.data?.city:response.data?.locality,
        cityList,
      };
    } catch (error: any) {
      alert(error?.message);
    }
  }
  return;
};
export const GetCurrentWeatherByCoords = async (location: Location) => {
  if (location.lat !== 0 && location.long !== 0) {
    const response = await axiosInstance.get(
      `${RootBath}&q=${location?.lat},${location.long}&format=json`
    );
    if (response.data?.data?.error) {
      alert(response.data?.data?.error[0]?.msg);
    }
    return response?.data?.data;
  }
};
export const GetCurrentWeatherByCity = async (cityName: string) => {
  const response = await axiosInstance.get(
    `${RootBath}&q=${cityName}&format=json`
  );
  if (response.data?.data?.error) {
    alert(response.data?.data?.error[0]?.msg);
  }
  return response?.data?.data;
};

export default axiosInstance;
