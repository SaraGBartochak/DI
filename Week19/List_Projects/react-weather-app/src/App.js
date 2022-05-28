import React, {useState} from 'react';
import AutoCompleteText from './components/AutoCompleteText'
import CurrentWeather from './components/CurrentWeather'
import FiveDaysForcast from './components/FiveDaysForcast'
import './App.css';

export const AppContext = React.createContext(null)

function App() {
  const [currentWeather, setCurrentWeather] = useState([])
  const [city, setCity] = useState('');

  return (
    <AppContext.Provider value={{
      currentWeather,
      setCurrentWeather,
      city,
      setCity}}>
      <div className="App">
        <AutoCompleteText />
        <CurrentWeather />
        <FiveDaysForcast />
      </div>
    </AppContext.Provider>
  );
}

export default App;


///https://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=apikew&metric=true
