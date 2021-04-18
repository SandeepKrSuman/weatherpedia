import React, {useState} from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import WeatherCard from "./WeatherCard";

function Weather(){

    const [display, setDisplay] = useState(false);
    const [inputTxt, setInputTxt] = useState("");
    const [apiData, setApiData] = useState(null);

    
    const api = {key: process.env.REACT_APP_ACCESS_KEY, 
                base: "http://api.weatherstack.com/current?access_key="};

    function handleChange(event){
        setInputTxt(event.target.value);
    }

    function handleSubmit(event){
        if(inputTxt !== ""){
            fetch (`${api.base}${api.key}&query=${inputTxt}`)
            .then(res => res.json())
            .then(data => setApiData(data));
            setInputTxt("");
        }
        event.preventDefault();
        setDisplay(true);
    }

    const wbgurl = "url(https://raw.githubusercontent.com/SandeepKrSuman/weather_assets/master/weather_backgrounds/";
    const theme = { backgroundImage: "url(https://raw.githubusercontent.com/SandeepKrSuman/weather_assets/master/weather_backgrounds/homepage-day.jpg)" };

    
    if(display && apiData && apiData.success !== false){

        return ( 
            <div className = "container-fluid">
                <div className = "row homepage-styl">
                    <div className = "col-md-6 home-title">
                        <Navbar />
                        <Title 
                        caller="weather" 
                        temph={`${apiData.current.temperature} ℃`}
                        mainh={apiData.location.name} 
                        subh={apiData.location.country}
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit}
                        value={inputTxt} 
                        />
                    </div>
                    <div className = "col-md-6 weather-details" style = {{backgroundImage: `${wbgurl}${apiData.current.temperature <= 0 ? "snow" : apiData.current.weather_code}.jpg`}}>
                        <div className="wdescr">{apiData.current.weather_descriptions}</div>
                        <div className="row">
                            <WeatherCard heading = "Humidity" body = {`${apiData.current.humidity} %`} /> 
                            <WeatherCard heading = "Wind Speed" body = {`${apiData.current.wind_speed} km/hr ( ${apiData.current.wind_dir} )`} /> 
                            <WeatherCard heading = "Pressure" body = {`${apiData.current.pressure} MB`} /> 
                            <WeatherCard heading = "Precipitation" body = {`${apiData.current.precip} MM`} />
                            <WeatherCard heading = "UV index" body = {`${apiData.current.uv_index}`} />
                            <WeatherCard heading = "Visibility" body = {`${apiData.current.visibility} km`} />
                        </div>
                        <div className="feels-like">{`Feels Like ${apiData.current.feelslike} ℃`}</div>
                    </div>
                </div>
            </div>
         );

    }

    else{
        
        return ( 
            <div className = "container-fluid">
                <div className = "row homepage-styl">
                    <div className = "col-md-6 home-title">
                        <Navbar />
                        <Title 
                        caller="weather" 
                        temph="" 
                        mainh="Weatherpedia" 
                        subh="feels like..."
                        handleChange={handleChange} 
                        handleSubmit={handleSubmit}
                        value={inputTxt} 
                        />
                    </div>
                    <div className = "col-md-6 home-img" style = {theme}>
                    </div>
                </div>
            </div>
         );

    }

}

export default Weather;