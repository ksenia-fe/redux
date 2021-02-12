import React, { useEffect } from "react";
import { connect } from "react-redux";
import { weatherDataSelector } from "./weather.selectors";
import * as weatherActions from "./weather.actions";

// const weatherData = [
//   { id: "1", temperature: 34, name: "Moenhaven" },
//   { id: "2", temperature: 65, name: "O'Haraside" },
//   { id: "3", temperature: 5, name: "South Gladyceport" },
//   { id: "4", temperature: 25, name: "Lake Elwinchester" },
//   { id: "5", temperature: 60, name: "New Ruby" },
//   { id: "6", temperature: 10, name: "South Sydniemouth" },
//   { id: "7", temperature: 87, name: "West Tyrel" },
// ];

const Weather = ({ weatherData, fetchWeatherData }) => {
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
    weatherData: weatherDataSelector(state),
  };
};

const mapDispatch = {
  fetchWeatherData: weatherActions.fetchWeatherData(),
};

export default connect(mapState, mapDispatch)(Weather);
