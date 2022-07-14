import "./UI.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function AirPollutionBox() {
  const cityRef = useRef();
  const navigate = useNavigate();

  function air_submit_handler(event) {
    event.preventDefault();
    if (cityRef.current.value.trim() !== "") {
      navigate("/air-quality", {state: {city: cityRef.current.value}});
    } else {
      alert("Please type city name not white spaces!");
    }
  }
  return (
    <div className="air-div">
      <h4>Air pollution</h4>
      <p>
        It provides air quality index data on major pollutant gases
        like CO, O3, NO2, SO2, PM 2.5 and PM 10.
      </p>
      <form onSubmit={air_submit_handler}>
        <label htmlFor="city-air" className="form-label">
          City name
        </label>
        <input
          id="city-air"
          type="text"
          className="form-control"
          placeholder="City name"
          ref={cityRef}
          required
          autoComplete="off"
        />
        <input
          id="air-submit"
          type="submit"
          value="Submit"
          className="btn btn-warning w-100"
        />
      </form>
    </div>
  );
}

export default AirPollutionBox;
