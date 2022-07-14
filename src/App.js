import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Data from './pages/DataPage';
import CityNotFound from './pages/CityNotFoundPage';
import Forecast from './pages/ForecastPage';
import AirQuality from './pages/AirQualityPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/app' element={Home()} />
        <Route path='/data' element={Data()} />
        <Route path='/forecast' element={Forecast()} />
        <Route path='/air-quality' element={AirQuality()} />
        <Route path='/city-not-found' element={CityNotFound("Some error occured")} />
      </Routes>
    </div>
  );
}

export default App;
