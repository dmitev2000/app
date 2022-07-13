function AstronomyBox() {
  function astronomy_submit_handler(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h4>Astronomy</h4>
      <p>Information for sunrise, sunset, moonrise, moonset, moon phase and illumination.</p>
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
