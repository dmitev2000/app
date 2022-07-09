import "./AdvancedBox.css";

function AdvancedBox() {
  return (
    <div className="box-container">
      <div>1</div>
      <div>
        <h4>Forecast</h4>
        <p>Up to 14 days weather forecast</p>
        <form>
          <label className="form-label" htmlFor="forecast-city">
            City name
          </label>
          <input
            id="forecast-city"
            className="form-control"
            type="text"
            placeholder="City or country"
          />
          <label className="form-label" htmlFor="forecast-days">
            Days (between 1 and 14 days)
          </label>
          <input
            id="forecast-days"
            className="form-control"
            type="number"
            placeholder="Days"
          />
          <input
            className="btn btn-outline-success"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <div>3</div>
      <div>4</div>
    </div>
  );
}

export default AdvancedBox;
