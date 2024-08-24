import axios from "axios";
const FetchWeather = async (city) => {
  const apiKey = "708df00807f71713104cfe8ac6898bb3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw err;
  }
};
export default FetchWeather;
