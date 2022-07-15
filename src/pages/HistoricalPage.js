import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HistoricalResults from "../components/data/UI/HistoricalResults";
import Spinner from "../components/data/UI/Spinner";

function Historical() {
  const hist_location = useLocation();
  const [city, setCity] = useState(null);
  const [date, setDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState({});
  const BASE_URL = "https://api.weatherapi.com/v1";
  const API_KEY = "9d9d7891de7e4fcd82f130603222305";

  useEffect(() => {
    setIsLoading(true);
    if (hist_location.state !== null) {
      setCity(hist_location.state.hist_city);
      setDate(hist_location.state.hist_date);
      if (city !== null && date !== null) {
        fetch(
          BASE_URL +
            "/history.json?key=" +
            API_KEY +
            "&q=" +
            city +
            "&dt=" +
            date
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setFetchedData(data);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [city, date, hist_location.state]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <HistoricalResults
        hist_forecast={fetchedData.forecast}
        hist_location={fetchedData.location}
      />
    </div>
  );
}

export default Historical;
