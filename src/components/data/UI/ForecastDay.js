import Average from "./Average";
import HourList from "./HourList";
import "./UI.css";

function ForecastDay({ data }) {
  //console.log(data);
  return (
    <div className="hourlist">
      <h4 className="forecast-date">Date: {data.date}</h4>
      <Average day={data.day} time={data.date} />
      <HourList list={data.hour} />
    </div>
  );
}

export default ForecastDay;
