import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function ForecastBox() {
  const navigate = useNavigate();
  const cityInputRef = useRef();
  const daysInputRef = useRef();

  function forecast_submit_handler(event) {
    event.preventDefault();
    navigate("/forecast", {
      state: {
        cityname: cityInputRef.current.value,
        days: daysInputRef.current.value,
      },
    });
  }

  return (
    <div>
      <h4>Forecast</h4>
      <p>Up to 3 days weather forecast.</p>
      <form onSubmit={forecast_submit_handler}>
        <label className="form-label" htmlFor="forecast-city">
          City name
        </label>
        <input
          id="forecast-city"
          className="form-control"
          type="text"
          placeholder="City or country"
          required
          autoComplete="off"
          ref={cityInputRef}
        />
        <label className="form-label" htmlFor="forecast-days">
          Days (one, two or three days)
        </label>
        <input
          id="forecast-days"
          className="form-control"
          type="number"
          placeholder="Days"
          required
          min={1}
          max={3}
          autoComplete="off"
          ref={daysInputRef}
        />
        <input className="btn btn-warning w-100" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ForecastBox;
