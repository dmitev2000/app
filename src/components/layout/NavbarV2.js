import "./NavbarV2.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import logo from "./logo.png";

function Navbar_v2() {
  const navigate = useNavigate();
  const cityInputRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [ pathname ]);
  
  function search_handler(event) {
    event.preventDefault();
    const city = cityInputRef.current.value;
    if (city === "" || city === null || city.trim() === "") {
      alert("Please insert cityname!");
      return;
    } else {
      cityInputRef.current.value = "";
      if (document.getElementById("toggle-btn").checked) {
        document.getElementById("toggle-btn").checked = false;
      }
      navigate("/data", { state: { cityname: city.trim() } });
    }
  }

  function onChangeHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="div-header">
      <div className="brand-logo">
        <Link to="/app">
          <img src={logo} alt="Weather App Logo" />
        </Link>
      </div>

      <input type="checkbox" id="toggle-btn" checked={isOpen} onChange={onChangeHandler} />
      <label htmlFor="toggle-btn" className="show-menu-btn">
        <i className="bi bi-caret-down-fill"></i>
      </label>

      <nav>
        <ul className="navigation">
          <li>
            <Link to="/app">
              <i className="bi bi-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="bi bi-file-person"></i> About
            </Link>
          </li>
          <li>
            <input
              className="cityname-input"
              type="text"
              placeholder="Enter city name"
              ref={cityInputRef}
            />
          </li>
          <li>
            <input
              className="search-btn"
              type="button"
              value="Search"
              onClick={search_handler}
            />
          </li>
          <label htmlFor="toggle-btn" className="hide-menu-btn">
            <i className="bi bi-x"></i>
          </label>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar_v2;
