import { useState } from "react";
import {
  GetCityName,
  GetCurrentWeatherByCity,
  GetCurrentWeatherByCoords,
} from "../../axios/axiosInstance";
import { RequestType } from "../../shared/types";
import { useDispatch, useSelector } from "react-redux";
import {
  setWeather,
  setLocaion,
  setCityName,
  setCities,
  setSelectedCity,
  setUpComingWeather,
} from "../../redux/CitySlice";
import { RootState } from "../../redux/store";
const useHome = () => {
  const dispatch = useDispatch();
  const CityInfo = useSelector((state: RootState) => state.CityInfo);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  // async function  that check if the user want to get the weatcher by city name or current location and request the data then call UpdateDataUoponChange

  const getWeather = async (type: RequestType) => {
    setLoading(true);
    setErrorMessage("Detecting Your Weather...");
    let dataResponse: any;
    let cityRespone: any;
    if (type === RequestType.LATLONG) {
      dataResponse = await GetCurrentWeatherByCoords(CityInfo.location);
      
      cityRespone = await GetCityName(CityInfo.location);
     
    } else {
      dataResponse = await GetCurrentWeatherByCity(CityInfo.selectedCity);
    }

    if (dataResponse?.error || !dataResponse) {
      setErrorMessage("Faild To Get Your  Weather");
      setLoading(false);
      return;
    }
    UpdateDataUoponChange(
      type,
      dataResponse?.current_condition,
      dataResponse,
      cityRespone
    );
    setLoading(false);
    setErrorMessage("");
  };
  //  check request type and update store data  based on it 

  const UpdateDataUoponChange = (
    type: RequestType,
    currentCondition: any,
    dataResponse: any,
    cityResponse?: any
  ) => {
    if (type === RequestType.LATLONG) {
      if (cityResponse.cityName == "")
        setErrorMessage("Faild To Get City Name")
        dispatch(setCityName(cityResponse.cityName));
      dispatch(setSelectedCity(cityResponse.cityName));
      dispatch(setCities(cityResponse.cityList));
    }
    if (currentCondition) {
      dispatch(setUpComingWeather(dataResponse.weather));
      dispatch(
        setWeather({
          temp_C: currentCondition[0]?.temp_C,
          FeelsLikeC: currentCondition[0]?.FeelsLikeC,
          weatherStatus: currentCondition[0]?.weatherDesc[0]?.value,
          statusImage: currentCondition[0]?.weatherIconUrl[0]?.value,
          windspeedKmph: currentCondition[0]?.windspeedKmph,
          humidity: currentCondition[0]?.humidity,
          winddir16Point: currentCondition[0]?.winddir16Point,
        })
      );
    }
  };
  
  const HandlechangeSelectedCity = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setSelectedCity(event.target.value));
    await getWeather(RequestType.NAME);
    return;
  };
  // getting the GEO location for the current user adn update location state
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          dispatch(
            setLocaion({
              long: position?.coords?.longitude,
              lat: position?.coords?.latitude,
            })
          );
        },
        showLocationError
      );
    } else {
      setErrorMessage("Can't Detect Your Current Location");
    }
  };
  // Error handler for getLocation Function
  const showLocationError = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setErrorMessage(" You Denied The Request For Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setErrorMessage("Location Information Is Unavailable.");
        break;
      case error.TIMEOUT:
        setErrorMessage("The request to get Yor Location Timed Out.");
        break;
    }
  };
  return {
    getWeather,
    HandlechangeSelectedCity,
    loading,
    errorMessage,
    getLocation,
  };
};
export default useHome;
