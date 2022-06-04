export type LineChartDataType = {
  date: Date;
  value: number;
};
export type LineChartProps = {
  widthProp: number;
  left: number;
  right: number;
  top: number;
  bottom: number;
  heightProp: number;
  data: LineChartDataType[];
  isDesktop: boolean;
};
export type BarChartDataType = {
  name: string;
  value: number;
};
export type BarChartProps = {
  widthProp: number;
  left: number;
  right: number;
  heightProp: number;
  top: number;
  bottom: number;
  data: BarChartDataType[];
  isDesktop: boolean;
};
