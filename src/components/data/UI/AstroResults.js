import "./UI.css";

function AstroResults({ astro_data }) {
  //console.log(astro_data, astro_location);

  return (
    <div className="astro-res-container">
      <div>
        <ul>
          <li>
            <span>Sunrise</span>
            <span>{astro_data.sunrise}</span>
          </li>
          <li>
            <span>Sunset</span>
            <span>{astro_data.sunset}</span>
          </li>
          <li>
            <span>Moon phase</span>
            <span>{astro_data.moon_phase}</span>
          </li>
          <li>
            <span>Moonrise</span>
            <span>{astro_data.moonrise}</span>
          </li>
          <li>
            <span>Moonset</span>
            <span>{astro_data.moonset}</span>
          </li>
          <li>
            <span>Moon illumination</span>
            <span>{astro_data.moon_illumination}%</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AstroResults;
