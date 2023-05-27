const FavouriteCities = (props: {
    citiesList: {locationName: string, currentWeather: {temp_c: string, condition: {icon: string}}}[],
}) => {

    console.log(props.citiesList);
    const mapCitiesToList = props.citiesList.map((e: {locationName: string, currentWeather: {temp_c: string, condition: {icon: string}}}, i: number) => (
        <div key={i} className="d-flex align-items-center border w-100">
            <h4 className="text-muted">{e.locationName} {e.currentWeather.temp_c} °C</h4>
            <img src={e.currentWeather.condition.icon}></img>
        </div>))

    //const mapCitiesToList = props.citiesList.map(e => <div key={e} className="d-flex"><h3>{e[1]} - {e[0].temp_c} °C</h3> <img src={e[0].condition.icon}/></div>)
        
    return (
    <div className="border border p-2 border rounded shadow d-flex flex-column align-items-center">
        <h3>Ulubione miasta: </h3>
        <div className="w-100">
            {mapCitiesToList}
        </div>
        
    </div>
    );

}

export default FavouriteCities;