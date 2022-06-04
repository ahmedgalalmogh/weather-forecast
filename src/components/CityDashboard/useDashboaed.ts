import { useMediaQuery, Theme } from "@mui/material";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { UpComingType, HourlyType } from "../../shared/types";
import { useEffect, useState } from "react";
import { BarChartDataType, LineChartDataType } from "../Charts/types";

const useDashboard = () => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up(900));
  const CityInfo = useSelector((state: RootState) => state.CityInfo);
  const [lineChartData, setLineChartData] = useState<LineChartDataType[] | []>(
    []
  );
  const [barChartData, setBarChartData] = useState<BarChartDataType[] | []>([]);
  const addHours = (numOfHours: number, date = new Date()) => {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

    return date;
  };
  // convert Hourly and upcoming weather Data to approriate  Bar & Line Chart DataType
  const constuctChartsData = () => {
    let hoursLineData: LineChartDataType[] = [];
    let upcomingBarData: BarChartDataType[] = [];
    CityInfo?.upComingWeather[0].hourly.map(
      (item: HourlyType, indx: number) => {
        let hour: Date = addHours(indx);
        hoursLineData.push({
          date: hour,
          value: +item.tempC,
        });
      }
    );
    setLineChartData(hoursLineData);
    CityInfo?.upComingWeather?.map((item: UpComingType) => {
      upcomingBarData.push({
        name: (
          item.date.split("-")[1] +
          "/" +
          item.date.split("-")[2]
        ).toString(),
        value: +item.avgtempC,
      });
    });
    setBarChartData(upcomingBarData);
  };
  // useEffect with deppendancy  upcoming weather data if not empty  it call constuctChartsData
  useEffect(() => {
    if (
      CityInfo.upComingWeather.length > 0 &&
      lineChartData.length === 0 &&
      barChartData.length === 0
    ) {
      constuctChartsData();
    }
  }, [CityInfo.upComingWeather.length]);
  return {
    isDesktop,
    barChartData,
    lineChartData,
    CityInfo,
  };
};
export default useDashboard;
