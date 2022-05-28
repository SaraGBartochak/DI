const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const FAVORITE = getFromLoacalStorage('favorite');
import { useContext, useState } from "react";
import App, { AppContext } from "../App";
import CurrentWeather from "./CurrentWeather";


const Favorites = (props) =>{

    const [favorite,setFavorite] = useState(FAVORITE);
    // const [setCity] =useContext(AppContext)
    return(
        <>
        <h2>Favorites</h2>{
           favorite.map(city => {
               <div key={city.cityKey} style={{display:'inline-block',border:'1px solid #ccc',margin:'10px'}}>
                <CurrentWeather cityKey={city.cityKey} country={city.country}/>
               </div>
           })

        }
       </>
    )
}

export default Favorites;



