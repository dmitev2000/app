import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ForecastWeather from "../components/data/ForecastWeather.js";
import Spinner from "../components/data/UI/Spinner.js";
import CityNotFound from "./CityNotFoundPage.js";

function Forecast() {
  const location = useLocation();
  const [cityname, setCityname] = useState();
  const [days, setDays] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const BASE_URL = "https://api.weatherapi.com/v1";
  const API_KEY = "9d9d7891de7e4fcd82f130603222305";
  useEffect(() => {
    setIsLoading(true);
    if (location.state !== null) {
      setCityname(location.state.cityname);
      setDays(location.state.days);
      if (cityname !== undefined && days !== undefined) {
        fetch(
          BASE_URL +
            "/forecast.json?key=" +
            API_KEY +
            "&q=" +
            cityname +
            "&days=" +
            days
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setIsLoading(false);
            setFetchedData(data);
          });
      }
    }
  }, [cityname, days, location.state]);

  if (isLoading) {
    return <Spinner />;
  }

  if (fetchedData.hasOwnProperty("error")) {
    if (fetchedData.error.message !== undefined) {
      return <CityNotFound message={fetchedData.error.message} city={cityname} />;
    }
  }

  return (
    <div className="container">
      <ForecastWeather forecast={fetchedData.forecast} place={fetchedData.location} />
    </div>
  );
}

export default Forecast;
