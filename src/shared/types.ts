export type Location = {
  long: number;
  lat: number;
};
export type Weather = {
  temp_C: string;
  FeelsLikeC: string;
  weatherStatus: string;
  statusImage: string;
  windspeedKmph: string;
  humidity: string;
  winddir16Point: string;
};
export enum RequestType {
  NAME,
  LATLONG,
}
export type UpComingType = {
  avgtempC: string;
  avgtempF: string;
  date: string;
  maxtempC: string;
  maxtempF: string;
  mintempC: string;
  mintempF: string;
  sunHour: string;
  totalSnow_cm: string;
  uvIndex: string;
  hourly:HourlyType[];
};
export type HourlyType = {
  tempC: string;
};
export interface CityState {
  location: Location;
  cityName: string;
  cities: any[];
  selectedCity: string;
  cityWeather: Weather;
  upComingWeather: UpComingType[];
}
