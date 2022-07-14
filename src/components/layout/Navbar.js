import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import logo from "./logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const cityInputRef = useRef();

  function search_handler(event) {
    event.preventDefault();
    const city = cityInputRef.current.value;
    if (city === "" || city === null || city.trim() === "") {
      alert("Please insert cityname!");
      return;
    } else {
      cityInputRef.current.value = "";  
      navigate(
        "/data",
        { state: { cityname: city.trim() } }
      );
    }
  }

  function logo_click_handler() {
    navigate("/app", { replace: true });
  }

  return (
    <nav className="weather-nav d-flex justify-content-between">
      <div className="d-flex justify-content-start align-items-center">
        <img
          className="logo"
          src={logo}
          alt="weather app logo"
          onClick={logo_click_handler}
        />
        <Link to="/app" className="title">
          Weather App
        </Link>
      </div>
      <div className="nav-search-area">
        <input
          className="cityname-input"
          type="text"
          placeholder="Enter city name"
          ref={cityInputRef}
        />
        <input
          className="search-btn"
          type="button"
          value="Search"
          onClick={search_handler}
        />
      </div>
    </nav>
  );
}
