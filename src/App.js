import './App.css';
import City from './components/city/City';
import CitySearch from './components/CitySearch/CitySearch';
import { MainProvider } from './Context/Context';


function App() {
  
  return (
    <MainProvider>
      <City />
      <CitySearch />
    </MainProvider>
  );
}

export default App;
