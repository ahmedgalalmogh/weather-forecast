import { useEffect, useState } from "react";
import { LineChartDataType, LineChartProps } from "../types";
import * as d3 from 'd3'
// Custom Hook to Create Line chart using D3 implementation

const useHourlyLineChart = ({
  widthProp,
  left,
  right,
  top,
  bottom,
  heightProp,
  data,
}: LineChartProps) => {
  /* -1-   calculate  width,height for plotting area  ,
   clear any child for the dom element ,
   and  create any svg with  the derived calculations*/
  const constructShape = () => {
    d3.select(".basicLineChart").html("");
    const width = widthProp - left - right;
    const height = heightProp - top - bottom;
    const svg = d3
      .select(".basicLineChart")
      .append("svg")
      .attr("width", width + left + right)
      .attr("height", height + top + bottom)
      .append("g")
      .attr("transform", `translate(${left},${top})`);
    return {
      svg,
      height,
      width,
    };
  };
  /* -2- calculate   X axis range and  append  range text to X axis */
  const DrawXaxis = (
    svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
    width: number,
    height: number
  ) => {
    const x = d3
      .scaleTime()
      .domain(
        d3.extent(data, (d:LineChartDataType) => {
          return d.date;
        }) as [Date, Date]
      )
      .range([0, width]);

    svg
      .append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height - 5)
      .attr("fill", "#FFFFFF")
      .text("Time");
    return x;
  };
  /* -3- calculate   Y axis range and  append  range text to Y axis */

  const DrawYAxis = (
    svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
    height: number
  ) => {
    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d:LineChartDataType) => {
          return Math.max(
            ...data.map((dt) => (dt as unknown as LineChartDataType).value),
            0
          );
        }),
      ] as number[])
      .range([height, 10]);
    svg.append("g").call(d3.axisLeft(y));
    return y;
  };
  /* -3- Draw our Line based Upon data  and add attributes to it like color & stroke  */

  const DrawShape = (
    svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
    x: d3.ScaleTime<number, number, never>,
    y: d3.ScaleLinear<number, number, never>
  ) => {
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#f0f0f0")
      .attr("stroke-width", 2)
      .attr(
        "d",
        // @ts-ignore
        d3
          .line()
          .x((d) => {
            return x((d as unknown as LineChartDataType).date);
          })
          .y((d) => {
            return y((d as unknown as LineChartDataType).value);
          })
      );
  };
  // -5- Add Line Values with some orientation to avoid text overlaping On X axis  */
  const DrawText = (
    svg: d3.Selection<SVGGElement, unknown, HTMLElement, any>,
    height: number,
    x: d3.ScaleTime<number, number, never>
  ) => {
    svg
      .append("g")
      .attr("class", "x axis")
      .attr("id", "x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", function (d: any) {
        return "rotate(-30)";
      });
  };
  // -6- A helper function theat excute the above functions step by step   */

  const DrawLineChart = () => {
    const { svg, height, width } = constructShape();
    const x = DrawXaxis(svg, width, height);
    const y = DrawYAxis(svg, height);
    DrawShape(svg, x, y);
    DrawText(svg, height, x);
  };

  return {
    DrawLineChart,
  };
};

export default useHourlyLineChart;
