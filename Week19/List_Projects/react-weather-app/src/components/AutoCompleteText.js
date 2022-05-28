import React, {useState,useEffect,useContext} from 'react';
import {AppContext} from '../App';
import './AutoCompleteText.css'

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const AutoCompleteText = (props) => {
  const [suggestions, setSuggestions] = useState([])
  // const [hint,setHint] = useState('');
  const {setCurrentWeather,city,setCity} = useContext(AppContext)

  useEffect(()=>{
    getCurrentWeather(215854,'Tel Aviv');
  },[])

  const getSuggestions = (hint) => {
    fetch(`${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${hint}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setSuggestions(data)
    })
    .catch(e=> {
      console.log(e);
    })
  }



  const getCurrentWeather = (cityKey,cityName) => {
    fetch(`${APIURL}/currentconditions/v1/${cityKey}?apikey=${APIKEY}`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setCity(cityName);
      setCurrentWeather(data)
      setSuggestions([])
    })
    .catch(e=> {
      console.log(e);
    })
  }

  return(
    <div className="AutoCompleteText">
      <input type="text"
        onChange={(e)=>getSuggestions(e.target.value)}
        // value={hint}
      />
      <button onClick={getSuggestions}>click</button>
      <ul>
      {
        suggestions.map(item => {
          return (
            <li onClick={()=>getCurrentWeather(item.Key, item.LocalizedName)} key={item.Key}>
              {item.LocalizedName}, {item.Country.LocalizedName}
            </li>
          )
        })
      }
      </ul>
    </div>
  )
}
export default AutoCompleteText;
//`${BASE_URL}/currentconditions/v1/${id}?apikey=${API_KEY}
//https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=4x0wFtVYvGqcsciZNrDwEye6ZE7gQkQW&q=
