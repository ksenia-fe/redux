export const WEATHER_DATA_RECIEVED = "WEATHER_DATA_RECIEVED";
import { fetchWeatherData } from "./weather.gateway";

export const weatherDataRecieved = (weatherData) => {
  return {
    type: WEATHER_DATA_RECIEVED,
    payload: {
      weatherData,
    },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then((weatherData) => {
      dispatch(weatherDataRecieved(weatherData));
    });
  };
};
