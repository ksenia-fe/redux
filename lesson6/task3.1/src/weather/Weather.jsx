import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as weatherActions from "./weather.actions";

const Weather = ({ weatherData, getWeatherData }) => {
  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {weatherData.map((city) => {
          return (
            <li className="city" key={city.id}>
              <span className="city__name">{city.name}</span>
              <span className="city__temperature">{`${city.temperature} F`}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

const mapState = (state) => {
  return {
    weatherData: state.weatherData,
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
