import { Stack } from "@mui/material";
import Element from "./Element";
import CitiesList from "../Home/CitisList";
import { useNavigate } from "react-router-dom";
import { WeatherProps } from "./types";
import { DashboardButton } from "./styles";

const WeatherCard = ({ weather, handleSelectChange }: WeatherProps) => {
  let navigate = useNavigate();

  return (
    <>
      <CitiesList handleSelectChange={handleSelectChange} />
      <Stack direction={"row"} alignItems={"space-around"} spacing={5}>
        <Stack direction={"column"}>
          {" "}
          <Element
            header='Current'
            result={weather.temp_C}
            Icon={true}
            C_extension={true}
            divider={true}
          />
          <Element
            header='Status'
            result={weather.weatherStatus}
            divider={true}
          />
          <Element
            header='Wind Speed'
            result={`${weather.windspeedKmph}km/h`}
          />
        </Stack>
        <Stack direction={"column"}>
          <Element
            header='RealFeel®'
            result={weather.FeelsLikeC}
            Icon={true}
            C_extension={true}
            divider={true}
          />

          <Element
            header='Humidity'
            result={`${weather.humidity}%`}
            divider={true}
          />

          <Element header='Wind Direction' result={weather.winddir16Point} />
        </Stack>
      </Stack>
      <DashboardButton
        variant='outlined'
        onClick={() => {
          navigate("../city-dashboard", { replace: true });
        }}
        fullWidth>
        {" "}
        City Dashboard
      </DashboardButton>
    </>
  );
};
export default WeatherCard;
