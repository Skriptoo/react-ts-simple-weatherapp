import { weatherApiOptions } from "../api";

const WeatherView = (props: {currentPlace: {location: {name: string, country: string, lat: string, lon: string}, current: {condition: {icon: string}, temp_c: String, temp_f: String}, forecast: {forecastday: {}}}}) => {

    const viewForecast = (cityname: string) => {
        return fetch(`${weatherApiOptions.url}?key=${weatherApiOptions.key}&q=${cityname}&aqi=no`)
        .then(res => res.json())
        .catch(err => console.error('error:' + err));
    }


    console.log(props.currentPlace);
    return (
        <div className="d-flex flex-column align-items-center border border-secondary rounded shadow">
            <h1 className="p-1"> {props.currentPlace.location.name}</h1>
            <h4> {props.currentPlace.location.country} </h4>
            <p> {props.currentPlace.location.lat} {props.currentPlace.location.lon}</p>    
            <img src={props.currentPlace.current.condition["icon"]}/>
            <h4 className="text-muted font-weight-bold"> <strong>{props.currentPlace.current.temp_c} °C {props.currentPlace.current.temp_f} °F  </strong></h4>
            <button className="btn btn-outline-primary m-3" onClick={() => viewForecast(props.currentPlace.location.name)}>Wyświetl przyszłą prognozę!</button>
        </div>
    )
}
export default WeatherView;