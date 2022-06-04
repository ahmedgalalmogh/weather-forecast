import { Weather } from "../../shared/types";

export type WeatherProps = {
  weather: Weather;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => any;
};
export type ElementProps = {
  header: string;
  result: string;
  C_extension?: boolean;
  Icon?: boolean;
  divider?: boolean;
};