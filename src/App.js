import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import Data from './pages/DataPage';
import CityNotFound from './pages/CityNotFoundPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/app' element={Home()} />
        <Route path='/data' element={Data()} />
        <Route path='/city-not-found' element={CityNotFound(" ")} />
      </Routes>
    </div>
  );
}

export default App;
