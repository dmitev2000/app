import "./CurrentWeather.css";

function CurrentWeather({ current, location }) {
  return (
    <div>
      <div className="location-info">
        <h2 className="text-center">
          {location.name}, {location.region}, {location.country}
        </h2>
      </div>
      <div className="current-card">
        <div className="current-card-header">
          <p>Current Weather</p>
          <p className="time">
            {location.localtime.split(" ")[1].split(":")[0]} :{" "}
            {location.localtime.split(" ")[1].split(":")[1]} ({location.tz_id}{" "}
            timezone)
          </p>
        </div>
        <div className="current-card-body">
          <div className="left">
            <img
              className="icon"
              src={current.condition.icon}
              alt={current.condition.icon}
            />
            <div>
              <span className="temp_c">{current.temp_c}°c</span>
              <br />
              <span className="feels_like">
                RealFeel&reg;{current.feelslike_c}°
              </span>
            </div>
          </div>
          <div className="right">
            <ul>
              <li>
                <span>UV Index</span> <span>{current.uv}</span>
              </li>
              <li>
                <span>Wind</span>{" "}
                <span>
                  {current.wind_kph} km/h ({current.wind_dir})
                </span>
              </li>
              <li>
                <span>Humidity</span> <span>{current.humidity}%</span>
              </li>
              <li>
                <span>Visibility</span> <span>{current.vis_km} km</span>
              </li>
              <li>
                <span>Pressure</span> <span>{current.pressure_mb} mb</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="current-card-footer">
          <span className="weather-description">{current.condition.text}</span>
          <span>
            ({location.lat}°, {location.lon}°)
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
