import { Stack, Typography } from "@mui/material";
import { RequestType } from "../../shared/types";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Card, RowElement, Wrapper } from "./styles";
import OpacityIcon from "@mui/icons-material/Opacity";
import AirIcon from "@mui/icons-material/Air";
import GrainIcon from "@mui/icons-material/Grain";
import WindPowerIcon from "@mui/icons-material/WindPower";
import HourlyChart from "../Charts/LineChartComponent";
import { useEffect } from "react";
import useHome from "../Home/useHome";
import UpComingBarChart from "../Charts/BarChartComponent";
import LoadingComponent from "../shared/LoadingComponent";
import useDashboard from "./useDashboaed";
const CityDashboard = () => {
  const { getWeather, getLocation, loading, errorMessage } = useHome();
  const { CityInfo, barChartData, isDesktop, lineChartData } = useDashboard();
  useEffect(() => {
    console.log("detectLocation", CityInfo);

    if (
      CityInfo.location.lat === 0 &&
      CityInfo.location.long === 0 &&
      CityInfo.selectedCity === ""
    ) {
      console.log("detectLocation", CityInfo);
      getLocation();
    }
  }, []);
  useEffect(() => {
    console.log("getWeather", CityInfo);

    if (
      CityInfo.upComingWeather.length === 0 &&
      CityInfo.location.lat !== 0 &&
      CityInfo.location.long !== 0
    ) {
      console.log("getWeather", CityInfo);

      getWeather(RequestType.LATLONG);
    }
  }, [CityInfo.location]);

  return (
    <>
      {CityInfo.upComingWeather.length > 0 ? (
        <Wrapper spacing={2}>
          <Card
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            sx={{ width: "100%", marginTop: "20px" }}
            spacing={2}
            justifyContent={{
              lg: "space-around",
              md: "space-around",
              sm: "center",
              xs: "center",
            }}
            alignItems={"center"}>
            <Typography variant='h4'>
              {CityInfo.cityName ? CityInfo.cityName : "City Name Not Provided"}
            </Typography>
            <RowElement spacing={1}>
              <ThermostatIcon />
              <Typography variant='h4'>
                {CityInfo.cityWeather.temp_C}

                <Typography variant='body2' display={"inline"}>
                  C
                </Typography>
              </Typography>
            </RowElement>
            <RowElement spacing={1}>
              <img
                width={"24"}
                src={CityInfo.cityWeather.statusImage}
                height={"24"}
              />
              <Typography variant='h4'>
                {CityInfo.cityWeather.weatherStatus}
              </Typography>
            </RowElement>
            <RowElement spacing={1}>
              <GrainIcon />
              <Typography variant='h4'>
                {CityInfo.upComingWeather[0].totalSnow_cm}
                <Typography variant='body2' display={"inline"}>
                  In
                </Typography>
              </Typography>
            </RowElement>
          </Card>
          <Card>
            <Typography variant='h4'>Today Weather</Typography>
            <Stack direction={"row"} justifyContent={"center"} spacing={4}>
              <HourlyChart
                top={10}
                right={isDesktop ? 50 : 30}
                bottom={isDesktop ? 50 : 30}
                left={isDesktop ? 50 : 30}
                widthProp={isDesktop ? 800 : 400}
                heightProp={250}
                data={lineChartData}
              />
            </Stack>
          </Card>
          <Stack
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            spacing={4}
            justifyContent={{
              lg: "space-between",
              md: "space-between",
              sm: "center",
              xs: "center",
            }}>
            <Card spacing={1}>
              <Typography sx={{ textAlign: "center" }} variant='h4'>
                Minimum Temp
              </Typography>
              <Stack
                direction={"row"}
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}>
                <ThermostatIcon />
                <Typography variant='h4'>
                  {CityInfo.upComingWeather[0].mintempC}

                  <Typography variant='body2' display={"inline"}>
                    C
                  </Typography>
                </Typography>
              </Stack>
            </Card>
            <Card spacing={1}>
              <Typography sx={{ textAlign: "center" }} variant='h4'>
                Maximum Temp
              </Typography>
              <Stack
                direction={"row"}
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}>
                <ThermostatIcon />

                <Typography variant='h4'>
                  {CityInfo.upComingWeather[0].maxtempC}

                  <Typography variant='body2' display={"inline"}>
                    C
                  </Typography>
                </Typography>
              </Stack>
            </Card>
            <Card spacing={1}>
              <Typography sx={{ textAlign: "center" }} variant='h4'>
                Wind Direction
              </Typography>
              <Stack
                direction={"row"}
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}>
                <WindPowerIcon />
                <Typography variant='h4'>
                  {CityInfo.cityWeather.winddir16Point}
                </Typography>
              </Stack>
            </Card>
          </Stack>
          <Stack
            direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            spacing={4}
            justifyContent={{
              lg: "space-between",
              md: "space-between",
              sm: "center",
              xs: "center",
            }}>
            <Card spacing={1}>
              <Typography sx={{ textAlign: "center" }} variant='h4'>
                UV Index
              </Typography>
              <Stack
                direction={"row"}
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}>
                <AcUnitIcon />
                <Typography variant='h4'>
                  {CityInfo.upComingWeather[0].totalSnow_cm}

                  <Typography variant='body2' display={"inline"}>
                    out of 10
                  </Typography>
                </Typography>
              </Stack>
            </Card>
            <Card spacing={1}>
              <Typography sx={{ textAlign: "center" }} variant='h4'>
                Humidity
              </Typography>
              <Stack
                direction={"row"}
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}>
                <OpacityIcon />
                <Typography variant='h4'>
                  {CityInfo.cityWeather.humidity}

                  <Typography variant='body2' display={"inline"}>
                    %
                  </Typography>
                </Typography>
              </Stack>
            </Card>
            <Card spacing={1}>
              <Typography sx={{ textAlign: "center" }} variant='h4'>
                Wind Speed
              </Typography>
              <Stack
                direction={"row"}
                spacing={1}
                justifyContent={"center"}
                alignItems={"center"}>
                <AirIcon />
                <Typography variant='h4'>
                  {CityInfo.cityWeather.windspeedKmph}

                  <Typography variant='body2' display={"inline"}>
                    km/h
                  </Typography>
                </Typography>
              </Stack>
            </Card>
          </Stack>
          <Stack direction={"row"} spacing={4} justifyContent={"space-between"}>
            <Card sx={{ padding: "20px" }}>
              <Typography variant='h4'>Upcoming Days Weather </Typography>
              <Stack direction={"row"} justifyContent={"center"}>
                <UpComingBarChart
                  widthProp={isDesktop ? 800 : 340}
                  heightProp={240}
                  left={isDesktop ? 50 : 25}
                  right={isDesktop ? 50 : 25}
                  top={isDesktop ? 50 : 25}
                  bottom={isDesktop ? 50 : 25}
                  data={barChartData}
                />
              </Stack>
            </Card>
          </Stack>
        </Wrapper>
      ) : (
        <Card sx={{ width: "fit-content" }} spacing={5}>
          <LoadingComponent loading={loading} errorMessage={errorMessage} />
        </Card>
      )}
    </>
  );
};
export default CityDashboard;
