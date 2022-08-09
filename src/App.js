import './App.css';

import CitySearch from './components/CitySearch/CitySearch';
import Daily from './components/Daily/Daily';
import WeatherPage from './components/Weather/Weather';
import { MainProvider } from './Context/Context';


function App() {

  return (
    <MainProvider>
      <div className='app_container'>
        <div className='left_side'>
          <CitySearch />
          <WeatherPage />
        </div>
        <div className='right_side'>
          <Daily />
        </div>
      </div>
    </MainProvider>
  );
}

export default App;
