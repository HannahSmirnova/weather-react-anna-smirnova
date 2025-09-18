import { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();

    let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      apiKey +
      "&units=metric";

    axios.get(url).then(function (response) {
      setWeather({
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: "CLEAR_NIGHT",
      });
    });
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit">Search</button>
      </form>

      {weather !== null && (
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <ReactAnimatedWeather
              icon={weather.icon}
              color="black"
              size={64}
              animate={true}
            />
          </li>
        </ul>
      )}
    </div>
  );
}
