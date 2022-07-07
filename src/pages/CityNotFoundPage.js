import './CityNotFound.css';

function CityNotFound(props) {
  return (
    <div className="container">
      {props.message !== undefined && <h1 className='error-title'>{props.message}</h1>}
    </div>
  );
}

CityNotFound.defaultProps = {
  message: "Some error occured"
};

export default CityNotFound;