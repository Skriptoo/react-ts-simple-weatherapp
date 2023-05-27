import { useState } from "react";
import windIcon from "../assets/wind-icon.png";

const WeatherView = (props: {
    currentPlace: {
        location: {name: string, country: string, lat: string, lon: string}, 
        current: {condition: {icon: string}, temp_c: string, temp_f: string, wind_kph: string}, 
        forecast: {forecastday: Array<{date: string, day: {condition: {icon: string}, maxtemp_c: string, maxtemp_f: string}}>}}
    setCitiesList: Function}) => {

    console.log(props.currentPlace);

    const generatedForecastList = props.currentPlace.forecast.forecastday.map(e =>
        <tr className="d-flex align-items-center justify-content-center border" key={e.date}>
            <td> <p className="p-1"> {e.date} </p></td>
            <td> <img src={e.day.condition.icon}/> </td>
            <td> <strong> <p className="text-muted p-1">{e.day.maxtemp_c}°C</p> </strong></td>
            <td> <strong> <p className="text-muted p-1">{e.day.maxtemp_f}°F</p> </strong></td>
        </tr>
    )
    
    return (
        <div className="d-flex flex-column align-items-center border rounded shadow">
            <div>
                <button className="align-items-standard btn btn-outline-primary align-items-end" onClick={() => props.setCitiesList((prev: object[]) => [...prev,{ "currentWeather": props.currentPlace.current, "locationName": props.currentPlace.location.name}])}>+</button>
            </div>
            <h1 className="p-1"> {props.currentPlace.location.name}</h1>
            <h4> {props.currentPlace.location.country} </h4>
            <p> {props.currentPlace.location.lat} {props.currentPlace.location.lon}</p>
            <div className="d-flex p-1 align-items-center justify-content-around">
                <strong> <p style={{height: 16}}>{props.currentPlace.current.wind_kph} km/h</p> </strong>
                <img src={windIcon} style={{height: 16}} className="m-1"></img>
            </div>    
            <img src={props.currentPlace.current.condition.icon}/>
            <h4 className="text-muted font-weight-bold"> <strong>{props.currentPlace.current.temp_c}°C {props.currentPlace.current.temp_f}°F </strong></h4>
            <div className="d-flex flex-column border border w-100">
                <table>
                    <tbody>
                        {generatedForecastList}
                    </tbody> 
                </table>
            </div>
             
            
        </div>
    )
}
export default WeatherView;