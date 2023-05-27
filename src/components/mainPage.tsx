import { useEffect, useState } from "react";
import { weatherApiOptions } from "../api";
import FavouriteCities from "./favouriteCiteis";
import SearchBarComponent from "./searchBar";
import WeatherView from "./weatherView";

const MainPageComponent = () => {
    const [currentLocation, setCurrentLocation] = useState();
    const [citiesList, setCitiesList] = useState<{locationName: string, currentWeather: {temp_c: string, condition: {icon: string}}}[]>([]);

    
    const handleSearch = (arg: string) => {
        return fetch(`${weatherApiOptions.url}?key=${weatherApiOptions.key}&q=${arg}&aqi=no&days=3&alerts=no`)
        .then(res => res.json())
        .then(json => setCurrentLocation(json))
        .catch(err => console.error('error:' + err));
    }
    //<WeatherView currentPlace={currentLocation}/>

    return (
        <div className="d-flex align-items-center justify-content-center p-5 w-100">
            <div className="w-100 align-items-center justify-content-center">
                {<SearchBarComponent handleSearch={handleSearch}/>}
                <div className="d-flex justify-content-around">
                    {currentLocation && <WeatherView currentPlace={currentLocation} setCitiesList={setCitiesList}/>}
                    {<FavouriteCities citiesList={citiesList}/>}
                </div>
            </div>      
        </div>
    );
}

export default MainPageComponent;