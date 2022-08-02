import ForecastDay from './ForecastDay';
import './UI.css';

function HistoricalResults({hist_forecast, hist_location}) {
    return <div>
        <h3 className='page-title'>Historical weather in {hist_location.name}, {hist_location.country}</h3>
        <ForecastDay data={hist_forecast.forecastday[0]} />
    </div>
}

export default HistoricalResults;