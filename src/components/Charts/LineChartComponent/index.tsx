import { useEffect } from "react";
import { LineChartProps } from "../types";
import useHourlyLineChart from "./useHourlyChart";

const HourlyLineChart = ({
  widthProp,
  left,
  right,
  top,
  bottom,
  heightProp,
  data,isDesktop
}: LineChartProps) => {
  const { DrawLineChart } = useHourlyLineChart({
    widthProp,
    left,
    right,
    top,
    bottom,
    heightProp,
    data,isDesktop
  });
  useEffect(() => {
    if (data) {
      DrawLineChart();
    }
  }, [data, isDesktop]);




  return <div className='basicLineChart' />;
};

export default HourlyLineChart;
