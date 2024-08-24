import "../App.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    } else {
      alert("Please enter a city name.");
    }
  };
  return (
    <>
      <div className="container">
        <input
          className="input"
          type="text"
          placeholder="Enter Your city "
          value={city}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearchClick}>
          search
        </button>
      </div>
    </>
  );
};
export default Search;
