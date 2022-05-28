import {useContext} from 'react'
import {AppContext} from '../App';

const CurrentWeather = (props) => {
    const {currentWeather,city} = useContext(AppContext);
    console.log('currentWeather',currentWeather);

    if(currentWeather.length===0) return null;

    return(
      <div>
        <h4>Current Weather</h4>
        <p>{city}</p>
        <p>{
          currentWeather[0].Temperature.Metric.Value
        }</p>_
        <p>{
          currentWeather[0].WeatherText
        }</p>
        <p>{
          <img src={`https://developer.accuweather.com/sites/default/files/${currentWeather[0].WeatherIcon<10?'0'+currentWeather[0].WeatherIcon:currentWeather[0].WeatherIcon}-s.png`} />
        }</p>
      </div>
    )
}
export default CurrentWeather
