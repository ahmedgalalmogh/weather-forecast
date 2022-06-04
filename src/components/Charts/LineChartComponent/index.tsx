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
  data,
}: LineChartProps) => {
  const { DrawLineChart } = useHourlyLineChart({
    widthProp,
    left,
    right,
    top,
    bottom,
    heightProp,
    data,
  });
  useEffect(() => {
    if (data) {
      DrawLineChart();
    }
  }, [data]);




  return <div className='basicLineChart' />;
};

export default HourlyLineChart;
