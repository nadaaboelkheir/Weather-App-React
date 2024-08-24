import "./App.css";
import { useState, useEffect } from "react";
import Search from "./components/search";
import Card from "./components/card";
import FetchWeather from "./controllers/weather";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  const handleSearchClick = async (city) => {
    // console.log("City:", city);
    try {
      const data = await FetchWeather(city);
      // console.log("Weather Data:", data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    if (city) {
      handleSearchClick(city);
    }
  }, [city]);

  const onSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <>
      <div className="header">
        <p>
          Seeing the weather of the whole world with
          <h4 style={{ color: "#28a0f7" }}>Dark Weather!</h4>
        </p>
      </div>
      <Search onSearch={onSearch} />
      {weatherData ? (
        <Card weather={weatherData} />
      ) : (
        <p>No weather data available. Please search for a city.</p>
      )}{" "}
    </>
  );
};

export default App;
