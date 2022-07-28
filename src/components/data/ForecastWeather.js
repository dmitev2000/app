import ForecastDay from "./UI/ForecastDay";

function ForecastWeather({ forecast, place }) {
  //console.log(forecast);
  //console.log(place);
  let key = 0;
  return (
    <div>
      <h2 className="page-title">Forecast {place.name}, {place.country}</h2>    
      {forecast.forecastday.map(() => {
        return <ForecastDay key={key++} data={forecast.forecastday[key]} />;
      })}
    </div>
  );
}

export default ForecastWeather;
