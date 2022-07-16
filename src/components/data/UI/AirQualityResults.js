import "./UI.css";
import '../../../index.css';

function AirQualityResults({ air_quality, place }) {
  //console.log(air_quality);
  const defra_index = air_quality["gb-defra-index"];
  const epa_index = air_quality["us-epa-index"];
  let defra_classes = "defra-index";
  let epa_classes = "epa-index";
  let defra_text = "";
  let epa_text = "";
  if (defra_index < 4) {
    defra_classes += " low";
    defra_text = "LOW";
  } else if (defra_index >= 4 && defra_index < 7) {
    defra_classes += " moderate";
    defra_text = "MODERATE";
  } else if (defra_index >= 7 && defra_index < 9) {
    defra_classes += " high";
    defra_text = "HIGH";
  } else if (defra_index >= 9) {
    defra_classes += " very_high";
    defra_text = "VERY HIGH";
  }

  if (epa_index === 1) {
    epa_classes += " good";
    epa_text = "GOOD";
  } else if (epa_index === 2) {
    epa_classes += " moderate";
    epa_text = "MODERATE";
  } else if (epa_index === 3) {
    epa_classes += " unhealthy_for_sensitive";
    epa_text = "Unhealthy for sensitive groups";
  } else if (epa_index === 4) {
    epa_classes += " unhealthy";
    epa_text = "UNHEALTHY";
  } else if (epa_index === 5) {
    epa_classes += " very_unhealthy";
    epa_text = "Very unhealthy";
  } else if (epa_index === 6) {
    epa_classes += " hazardous";
    epa_text = "HAZARDOUS";
  }

  return (
    <div className="aqr-container">
      <h3 className="aqr-lead">Air quality in {place}</h3>
      <hr />
      <div className="indexes">
        <div className={epa_classes}>
          <h3>US-EPA-INDEX: {epa_index}</h3>
          <h5 className="text-center">{epa_text}</h5>
        </div>
        <div className={defra_classes}>
          <h3>GB-DEFRA-INDEX: {defra_index}</h3>
          <h5 className="text-center">{defra_text}</h5>
        </div>
      </div>
      <table id="pollutant-gasses" className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Pollutant gase</th>
            <th scope="col">Abbreviation</th>
            <th scope="col">μg/m3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carbon monoxide</td>
            <td>CO</td>
            <td>{air_quality.co}</td>
          </tr>
          <tr>
            <td>Ozone</td>
            <td>
              O<sub>3</sub>
            </td>
            <td>{air_quality.o3}</td>
          </tr>
          <tr>
            <td>Nitrogen dioxide</td>
            <td>
              NO<sub>2</sub>
            </td>
            <td>{air_quality.no2}</td>
          </tr>
          <tr>
            <td>Sulphur dioxide</td>
            <td>
              SO<sub>2</sub>
            </td>
            <td>{air_quality.so2}</td>
          </tr>
          <tr>
            <td>Fine particulate matter</td>
            <td>
              PM<sub>2.5</sub>
            </td>
            <td>{air_quality.pm2_5}</td>
          </tr>
          <tr>
            <td>Inhalable particles</td>
            <td>
              PM<sub>10</sub>
            </td>
            <td>{air_quality.pm10}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AirQualityResults;
