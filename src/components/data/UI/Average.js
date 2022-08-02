import "./UI.css";

function Average({ day, time }) {
  console.log(day);
  return (
    <div className="daily-average">
      <h4 className="text-center">{time}</h4>
      <div className="average-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Min temperature</td>
              <td>{Math.round(day.mintemp_c)}°C</td>
            </tr>
            <tr>
              <td>Max temperature</td>
              <td>{Math.round(day.maxtemp_c)}°C</td>
            </tr>
            <tr>
              <td>Average temperature</td>
              <td>{Math.round(day.avgtemp_c)}°C</td>
            </tr>
            <tr>
              <td>Daily chance of rain</td>
              <td>{day.daily_chance_of_rain}%</td>
            </tr>
            <tr>
              <td>UV index</td>
              <td>{day.uv}</td>
            </tr>
            <tr>
              <td>Max wind speed</td>
              <td>{day.maxwind_kph} km/h</td>
            </tr>
            <tr>
              <td>Average humidity</td>
              <td>{day.avghumidity}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Average;
