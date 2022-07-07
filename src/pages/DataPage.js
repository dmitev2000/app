import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CurrentWeather from "../components/data/CurrentWeather";
import './DataPage.css';
import CityNotFound from './CityNotFoundPage';

function Data() {
  const location = useLocation();
  const [cityname, setCityname] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const BASE_URL = "https://api.weatherapi.com/v1";
  const API_KEY = "9d9d7891de7e4fcd82f130603222305";

  useEffect(() => {
    setIsLoading(true);
    if (location.state !== null) {
      //console.log(location.state);
      setCityname(location.state.cityname);
      fetch(BASE_URL + "/current.json?key=" + API_KEY + "&q=" + cityname)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setFetchedData(data);
          setIsLoading(false);
        });
    }
  }, [location.state, cityname]);

  if (isLoading) {
    return (
      <div className="container text-center">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (fetchedData.hasOwnProperty('error')) {
    if (fetchedData.error.message !== undefined) {
      return <CityNotFound message={fetchedData.error.message} />
    }
  }
  
  return (
    <div className="container">
      <CurrentWeather
        current={fetchedData.current}
        location={fetchedData.location}
      />
    </div>
  );
}

export default Data;
