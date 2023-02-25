import React, { useState } from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import WeatherCard from "./WeatherCard";

function Weather() {
  const [display, setDisplay] = useState(false);
  const [inputTxt, setInputTxt] = useState("");
  const [apiData, setApiData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const api = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_KEY}&units=metric&q=`;

  function handleChange(event) {
    setInputTxt(event.target.value);
  }

  function handleSubmit(event) {
    setLoading(true);
    if (inputTxt !== "") {
      fetch(`${api}${inputTxt}`)
        .then((res) => res.json())
        .then((data) => {
          setApiData(data);
          setLoading(false);
        });
      setInputTxt("");
    } else {
      setLoading(false);
    }
    event.preventDefault();
    setDisplay(true);
  }

  const wbgurl =
    "url(https://raw.githubusercontent.com/SandeepKrSuman/weather_assets/master/weather_backgrounds/_";
  const dt = new Date().getHours();
  const d = dt >= 6 && dt <= 18 ? true : false;
  const theme = {
    backgroundImage: `url(https://raw.githubusercontent.com/SandeepKrSuman/weather_assets/master/weather_backgrounds/themechange_${d}.jpg)`,
  };

  if (display && apiData && apiData.cod === 200) {
    const getBgUseId =
      apiData.weather[0].id === 741 ||
      apiData.weather[0].id === 781 ||
      apiData.weather[0].id === 801 ||
      apiData.weather[0].id === 802 ||
      apiData.weather[0].id === 803 ||
      apiData.weather[0].id === 804
        ? true
        : false;

    return (
      <div className="container-fluid">
        <div className="row homepage-styl">
          <div className="col-md-6 home-title">
            <Navbar />
            <Title
              caller="weather"
              loading={isLoading}
              temph={`${Math.round(apiData.main.temp)} ℃`}
              mainh={apiData.name}
              subh={apiData.sys.country}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              value={inputTxt}
            />
          </div>
          <div
            className="col-md-6 weather-details"
            style={{
              backgroundImage: `${wbgurl}${
                getBgUseId ? apiData.weather[0].id : apiData.weather[0].icon
              }.jpg`,
            }}
          >
            <div className="wdescr">{apiData.weather[0].description}</div>
            <div className="row">
              <WeatherCard
                heading="Min/Max"
                body={`${Math.round(apiData.main.temp_min)} ℃ / ${Math.round(
                  apiData.main.temp_max
                )} ℃`}
              />
              <WeatherCard
                heading="Humidity"
                body={`${apiData.main.humidity} %`}
              />
              <WeatherCard
                heading="Wind Speed"
                body={`${Math.round(apiData.wind.speed * 3.6)} km/h`}
              />
              <WeatherCard
                heading="Pressure"
                body={`${apiData.main.pressure} hPa`}
              />
              <WeatherCard heading="Clouds" body={`${apiData.clouds.all} %`} />
              <WeatherCard
                heading="Visibility"
                body={`${Math.round(apiData.visibility / 1000)} km`}
              />
            </div>
            <div className="feels-like">{`Feels Like ${Math.round(
              apiData.main.feels_like
            )} ℃`}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <div className="row homepage-styl">
          <div className="col-md-6 home-title">
            <Navbar />
            <Title
              loading={isLoading}
              caller="weather"
              temph=""
              mainh="Weatherpedia"
              subh="feels like..."
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              value={inputTxt}
            />
          </div>
          <div className="col-md-6 home-img" style={theme}></div>
        </div>
      </div>
    );
  }
}

export default Weather;
