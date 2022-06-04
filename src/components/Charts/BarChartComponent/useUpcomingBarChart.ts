import * as d3 from "d3";
import { BarChartDataType, BarChartProps } from "../types";
// Custom Hook to Create Bar chart using D3 implementation
const useUpcomingBarChart = ({
  widthProp,
  left,
  right,
  heightProp,
  top,
  bottom,
  data,
}: BarChartProps) => {
  /* -1- A function that clear any child in the dom element ,
     calculate width & height for Chart Area , 
     get X scale  ,create basic svg with derived wldth & height*/
  const constructShape = () => {
    d3.select(".basicBarChart").html("");
    const width = widthProp - left - right;
    const height = heightProp - top - bottom;
    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const svg = d3
      .select(".basicBarChart")
      .append("svg")
      .attr("width", width + left + right)
      .attr("height", height + top + bottom)
      .append("g")
      .attr("transform", `translate(${left},${top})`);
    x.domain(
      data.map((d) => {
        return d.name;
      })
    );
    return {
      height,
      width,
      x,
      svg,
    };
  };
  /* -2- A function that Add The y axis range with it's text*/
  const DrawYAxis = (height: number) => {
    const y = d3.scaleLinear().range([height, 0]);
    y.domain([
      0,
      d3.max(data, (d) => {
        return Math.max(...data.map((dt) => (dt as BarChartDataType).value), 0);
      }),
    ] as number[]);
    return y;
  };
  /* -3- A function that Add The X axis to the created svg   with x axis text */
  const DrawXaxis = (
    svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
    height: number,
    x: d3.ScaleBand<string>,
    y: d3.ScaleLinear<number, number, never>
  ) => {
    svg
      .append("g") // Add the X Axis
      .attr("class", "x axis")
      .attr("id", "x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", function (d) {
        return "rotate(-30)";
      });

    svg.append("g").call(d3.axisLeft(y));
    return x;
  };

  /* -4- final step  A function that Add our bar chart based upone derived data */
  const configureBarStyle = (
    svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
    x: d3.ScaleBand<string>,
    y: d3.ScaleLinear<number, number, never>,
    height: number
  ) => {
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("fill", "#f0f0f0")
      .attr("class", "bar")
      .attr("x", (d) => {
        return x(d.name) || 0;
      })
      .attr("width", x.bandwidth())
      .attr("y", (d) => {
        return y(d.value);
      })
      .attr("height", (d) => {
        return height - y(d.value);
      });
  };

  //helper function what excute above functions step by step
  const DrawBarChart = () => {
    let { height, width, x, svg } = constructShape();
    let y = DrawYAxis(height);
    x = DrawXaxis(svg, height, x, y);
    configureBarStyle(svg, x, y, height);
  };
  return {
    DrawBarChart,
  };
};

export default useUpcomingBarChart;
