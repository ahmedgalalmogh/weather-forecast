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
  data,isDesktop
}: BarChartProps) => {
 const { DrawBarChart } = useUpcomingBarChart({
   widthProp,
   left,
   right,
   heightProp,
   top,
   bottom,
   data,
   isDesktop,
 });
  

 useEffect(() => {
   if (data) {
     DrawBarChart();
   }
 }, [data,isDesktop]);
  return <div style={{ display: "flex" }} className='basicBarChart' />;
};

export default UpComingBarChart;
