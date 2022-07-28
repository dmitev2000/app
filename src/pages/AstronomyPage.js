import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/data/UI/Spinner";
import AstroResults from "../components/data/UI/AstroResults";

function Astronomy() {
  const astroLocation = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState({});
  const [city, setCity] = useState();
  const BASE_URL = "https://api.weatherapi.com/v1";
  const API_KEY = "9d9d7891de7e4fcd82f130603222305";

  useEffect(() => {
    setIsLoading(true);
    if (astroLocation.state !== null) {
      setCity(astroLocation.state.astro_city);
      if (city !== null && city !== undefined) {
        fetch(BASE_URL + "/astronomy.json?key=" + API_KEY + "&q=" + city)
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            setFetchedData(data);
            setIsLoading(false);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [astroLocation.state, city]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      <h1 className="page-title">
        Astronomy info for {fetchedData.location.name},{" "}
        {fetchedData.location.country}
      </h1>
      <AstroResults
        astro_data={fetchedData.astronomy.astro}
        astro_location={fetchedData.location}
      />
    </div>
  );
}

export default Astronomy;
