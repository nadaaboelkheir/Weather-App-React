/* eslint-disable react/prop-types */
import cloudyImage from "../assets/cloudy.png";
import sunnyImage from "../assets/sunny.png";
import rainyImage from "../assets/rainy.png";
import "../App.css";

const Card = ({ weather }) => {
  let selectedImage;
  const temperature = weather.main.temp;

  if (temperature >= 25) {
    selectedImage = sunnyImage;
  } else if (temperature >= 15) {
    selectedImage = cloudyImage;
  } else {
    selectedImage = rainyImage;
  }

  return (
    <div className="card">
      <img className="card-image" src={selectedImage} alt="Weather" />
      <div className="card-header">
        <p className="city">{weather.name}</p>
        <p className="degree">{temperature}°C</p>
      </div>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      <p>
        {new Date().toLocaleDateString("en-US", { weekday: "long" })} :{" "}
        {new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>{" "}
      <p>{weather.weather[0].main}</p>
    </div>
  );
};

export default Card;
