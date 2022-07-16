import "./Intro.css";
import logo from "../layout/logo.png";

export default function Intro() {
  return (
    <div className="jumbo">
      <div className="intro-group">
        <h1>Weather application</h1>
        <img src={logo} alt="Weather app logo" />
        <p className="lead compact">
          This is a simple weather application. All information about weather,
          astronomy data or air quality in your city can be found here.
        </p>
      </div>
      <hr className="my-4" />
      <p>
        Current weather, historical weather, forecasts & hourly interval weather
        information for a given city, air quality and more.
      </p>
      <p>Source code available on GitHub!</p>
      <a
        className="btn btn-warning"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/dmitev2000/app"
        role="button"
      >
        Check out
      </a>
    </div>
  );
}
