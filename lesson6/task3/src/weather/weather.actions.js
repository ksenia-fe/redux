import { getWeatherData } from "./weather.gateway";
export const WEATHER_DATA_RECIEVED = "USER_DATA_RECIEVED";

export const weatherDataRecieved = () => {
  return {
    type: WEATHER_DATA_RECIEVED,
  };
};

export const fetchWeatherData = () => {
  return function () {
    return getWeatherData().then((data) => data);
  };
};
