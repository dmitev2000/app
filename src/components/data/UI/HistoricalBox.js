import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./UI.css";

function Historical() {
  const histDateRef = useRef();
  const histCityRef = useRef();
  const navigate = useNavigate();
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate() - 1;
  //const DAYS = 7;
  const copyDate = new Date(date);
  copyDate.setDate(date.getDate() - 7);
  const seven_days_ago = copyDate;
  let min_year = seven_days_ago.getFullYear();
  let min_month = seven_days_ago.getMonth() + 1;
  let min_day = seven_days_ago.getDate();
  
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "01";
  }
  if (min_month < 10) {
    min_month = "0" + min_month;
  }
  if (min_day < 10) {
    min_day = "0" + min_day;
  }
  const MAX = year + "-" + month + "-" + day;
  const MIN = min_year + "-" + min_month + "-" + min_day;
  //console.log(year + "-" + month + "-" + day);
  //console.log(MAX, MIN);

  function hist_submit_handler(event) {
    event.preventDefault();
    navigate("/historical", {
      state: {
        hist_city: histCityRef.current.value,
        hist_date: histDateRef.current.value,
      },
    });
  }

  return (
    <div className="hist-div">
      <h4>Historical weather</h4>
      <p>Weather in the previous 3 days.</p>
      <form onSubmit={hist_submit_handler}>
        <label className="form-label" htmlFor="history-city">
          City name
        </label>
        <input
          className="form-control"
          id="history-city"
          placeholder="City name"
          required
          type="text"
          ref={histCityRef}
          autoComplete="off"
        />
        <label className="form-label" htmlFor="history-date">
          Date
        </label>
        <input
          className="form-control"
          id="history-date"
          type="date"
          min={MIN}
          max={MAX}
          required
          ref={histDateRef}
          autoComplete="off"
        />
        <input
          type="submit"
          value="Submit"
          className="btn btn-warning form-control mt-2"
        />
      </form>
    </div>
  );
}

export default Historical;
