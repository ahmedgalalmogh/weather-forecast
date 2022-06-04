import { useEffect } from "react";
import { BarChartProps } from "../types";
import useUpcomingBarChart from "./useUpcomingBarChart";
const UpComingBarChart = ({
  widthProp,
  left,
  right,
  heightProp,
  top,
  bottom,
  data,
}: BarChartProps) => {
 const { DrawBarChart } = useUpcomingBarChart({
   widthProp,
   left,
   right,
   heightProp,
   top,
   bottom,
   data,
 });

 useEffect(() => {
   if (data) {
     DrawBarChart();
   }
 }, [data]);
  return <div style={{ display: "flex" }} className='basicBarChart' />;
};

export default UpComingBarChart;
