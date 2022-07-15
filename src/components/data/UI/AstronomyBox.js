import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import './UI.css';

function AstronomyBox() {
  const navigate = useNavigate();
  const astroCityInputRef = useRef();

  function astronomy_submit_handler(event) {
    event.preventDefault();
    navigate('/astronomy', {state: {astro_city: astroCityInputRef.current.value}});
  }

  return (
    <div className='astro-div'>
      <h4>Astronomy</h4>
      <p>
        Information for sunrise, sunset, moonrise, moonset, moon phase and
        illumination.
      </p>
      <form onSubmit={astronomy_submit_handler}>
        <label htmlFor="city-astro" className="form-label">
          City name
        </label>
        <input
          id="city-astro"
          type="text"
          className="form-control"
          placeholder="City name"
          required
          autoComplete='off'
          ref={astroCityInputRef}
        />
        <input
          id="astro-submit"
          type="submit"
          value="Submit"
          className="btn btn-warning w-100"
        />
      </form>
    </div>
  );
}

export default AstronomyBox;
