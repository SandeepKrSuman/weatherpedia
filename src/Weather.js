import React, {useState} from "react";
import {Link} from "react-router-dom";
import WeatherCard from "./WeatherCard";

function Weather(){

    const [display, setDisplay] = useState(false);
    const [inputTxt, setInputTxt] = useState("");
    const [apiData, setApiData] = useState(null);

    
    // put your api key inside api.key below
    const api = {key: process.env.REACT_APP_ACCESS_KEY, 
                base: "http://api.weatherstack.com/current?access_key="};

    function handleChange(event){
        setInputTxt(event.target.value);
    }

    function handleSubmit(event){
        fetch (`${api.base}${api.key}&query=${inputTxt}`)
        .then(res => res.json())
        .then(data => setApiData(data));
        setInputTxt("");
        event.preventDefault();
        setDisplay(true);
    }

    function handlelDate(dt){
        let months = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        let date = new Date(`${dt}`);
        let d = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();
        let hour = date.getHours();
        let min = date.getMinutes();
        // let sec = date.getSeconds();

        return `${month} ${d}, ${year} ( ${hour}:${min} )`;

    };

    const wbgurl = "url(https://raw.githubusercontent.com/SandeepKrSuman/weather_assets/master/weather_backgrounds/";

    
    if (display){
    return ( 
        <section>
        <div className="search-box">
            <form onSubmit={handleSubmit}>
                <input 
                className = "search-input" 
                placeholder="Kolkata, India" 
                type="text" 
                spellCheck="false" 
                name="inputvalue"
                value = {inputTxt}
                onChange={handleChange}
                />
                <button type="submit" className = "search-button"><i className="fas fa-search"></i></button>
            </form>
        </div>
            <div className="weather-container-top" style = {{backgroundImage: `${wbgurl}${apiData && apiData.success !== false ? (apiData.current.temperature <= 0 ? "snow" : apiData.current.weather_code) : "116"}.jpg`}}>
                <span className="goback"><Link to ="/" className="back-link"><i className="fas fa-arrow-circle-left"></i></Link></span>
                <div className="weather-description">
                <h2 className="descr">{apiData && apiData.success !== false ? apiData.current.weather_descriptions : "Something went Wrong"}</h2>
                <h1 className="descr">{apiData && apiData.success !== false ? `${apiData.current.temperature}  ℃` : "Please,"}</h1>
                </div>
                <h1 className="city-name">{apiData && apiData.success !== false ? `${apiData.location.name}, ${apiData.location.country}` : "Search Again..."}</h1>
                <span className="date">{apiData && apiData.success !== false ? `${handlelDate(apiData.location.localtime)}` : null}</span>
            </div>
            <div className="weather-container-bottom">
                    <div className="row other-descr">
                        <WeatherCard heading = "Humidity" body = {apiData && apiData.success !== false ? `${apiData.current.humidity} %`  : null} /> 
                        <WeatherCard heading = "Wind Speed" body = {apiData && apiData.success !== false ? `${apiData.current.wind_speed} km/hr`  : null} /> 
                        <WeatherCard heading = "Pressure" body = {apiData && apiData.success !== false ? `${apiData.current.pressure} MB`  : null} /> 
                        <WeatherCard heading = "Precipitation" body = {apiData && apiData.success !== false ? `${apiData.current.precip} MM`  : null} />   
                        <div className="feels-like">{apiData && apiData.success !== false ? `Feels Like ${apiData.current.feelslike} ℃`  : null}</div>            
                    </div>
            </div>
        </section>
     );
    }

    else{
        return (
        <div>
        <div className="search-box">
            <form onSubmit={handleSubmit}>
                <input 
                className = "search-input" 
                placeholder="Kolkata, India" 
                type="text" 
                spellCheck="false" 
                name="inputvalue"
                value = {inputTxt}
                onChange={handleChange}
                />
                <button type="submit" className = "search-button"><i className="fas fa-search"></i></button>
            </form>
        </div>
        </div>
        );
    }
}

export default Weather;