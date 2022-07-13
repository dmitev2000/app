import "./AdvancedBox.css";
import ForecastBox from "../data/UI/ForecastBox";
import AirPollutionBox from "../data/UI/AirPollutionBox";
import AstronomyBox from "../data/UI/AstronomyBox";
import Historical from '../data/UI/HistoricalBox';

function AdvancedBox() {
  return (
    <div className="box-container">
      <ForecastBox />        
      <AirPollutionBox />
      <AstronomyBox />
      <Historical />
    </div>
  );
}

export default AdvancedBox;
