import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/data/UI/Spinner";
import AirQualityResults from "../components/data/UI/AirQualityResults";

function AirQuality() {
  const location = useLocation();
  const [city, setCity] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState({});
  const BASE_URL = "https://api.weatherapi.com/v1";
  const API_KEY = "9d9d7891de7e4fcd82f130603222305";

  useEffect(() => {
    setIsLoading(true);
    if (location.state !== null) {
      setCity(location.state.city);
      if (city !== undefined) {
        fetch(
          BASE_URL + "/current.json?key=" + API_KEY + "&q=" + city + "&aqi=yes"
        )
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            setFetchedData(data);
            setIsLoading(false);
          });
      }
    }
  }, [location.state, city]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h1 className="page-title">
        Air quality in {fetchedData.location.name},{" "}
        {fetchedData.location.country}
      </h1>
      <AirQualityResults
        air_quality={fetchedData.current.air_quality}
      />
    </div>
  );
}

export default AirQuality;
