import { useEffect, useState } from "react";
import { weatherApiOptions } from "../api";
import SearchBarComponent from "./searchBar";
import WeatherView from "./weatherView";

const MainPageComponent = () => {
    const [currentLocation, setCurrentLocation] = useState();
    
    
    const handleSearch = (arg: string) => {
        return fetch(`${weatherApiOptions.url}?key=${weatherApiOptions.key}&q=${arg}&aqi=no&days=3&alerts=no`)
        .then(res => res.json())
        .then(json => setCurrentLocation(json))
        .catch(err => console.error('error:' + err));
    }
    //<WeatherView currentPlace={currentLocation}/>

    return (
        <div className="d-flex align-items-center justify-content-center p-5">
            <div>
                {<SearchBarComponent handleSearch={handleSearch}/>}
                {currentLocation && <WeatherView currentPlace={currentLocation}/>}
            </div>      
        </div>
    );
}

export default MainPageComponent;