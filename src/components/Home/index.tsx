import { Stack } from "@mui/material";
import { Card } from "./styles";
import WeatherCard from "../WeatherResult";
import useHome from "./useHome";
import LoadingComponent from "../shared/LoadingComponent";
import { useEffect } from "react";
import { RequestType } from "../../shared/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
const Home = () => {
  const CityInfo = useSelector((state: RootState) => state.CityInfo);
  const {
    getLocation,
    getWeather,
    HandlechangeSelectedCity,
    loading,
    errorMessage,
  } = useHome();
  useEffect(() => {
    if (CityInfo.location.lat === 0 && CityInfo.location.long == 0) {
      getLocation();
    }
  }, []);
  useEffect(() => {
    if (CityInfo.location.lat !== 0 && CityInfo.location.long !== 0) {
      getWeather(RequestType.LATLONG);
    }
  }, [CityInfo.location]);

  return (
    <Card spacing={5}>
      <Stack justifyContent={"center"} alignItems='center' direction={"column"}>
        {CityInfo.cityWeather.temp_C !== "" ? (
          <WeatherCard
            weather={CityInfo.cityWeather}
            handleSelectChange={HandlechangeSelectedCity}
          />
        ) : (
          <LoadingComponent errorMessage={errorMessage} loading={loading} />
        )}
      </Stack>
    </Card>
  );
};
export default Home;
