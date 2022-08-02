import "./CityNotFound.css";
import { Link } from "react-router-dom";

function CityNotFound(props) {
  return (
    <div className="container full-height">
      {props.message !== undefined && (
        <h1 className="error-title">{props.message} ({props.city}) &#9940;</h1>
      )}
      <h4>
        Check for typos and{" "}
        <Link to="/app" className="try-again">
          try again
        </Link>
        .
      </h4>
    </div>
  );
}

CityNotFound.defaultProps = {
  message: "Some error occured",
};

export default CityNotFound;
