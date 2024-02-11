import { useState } from "react";
import styles from "./MainLayout.module.css";
import Navbar from "../Navbar/Navbar";
import Display from "../Display/Display";
import Toggler from "../Toggler/Toggler";
import SearchBox from "../SearchBox/SearchBox";
import WeatherReport from "../WeatherReport/WeatherReport";
import { setBackground } from "./background";

const themeBase = "/assets/day_";
const backgroundBase = "/assets/";

// function to check whether it is day time.
// used to set the background image on the homepage based on the time.
const isItDay = () => {
  const currentHour = new Date().getHours();
  return currentHour >= 6 && currentHour < 18;
};

export default function MainLayout() {
  const [bg, setBg] = useState(isItDay()); // stores true or false for whether it is day. Used by toggler to change backround image manually regarless of what time it is.
  const [displayWeather, setDisplayWeather] = useState(false); // set true only when data is fetched successfully and ready to display else false. Controlled from <SearchBox /> component via prop.
  const [apiData, setApiData] = useState(null); // stores the fetched api data. Controlled from <SearchBox /> component via prop.
  const [error, setError] = useState(null); // stores error message. Controlled from <SearchBox /> component via prop.

  return (
    <div
      className={styles.container}
      style={{ borderBottomRightRadius: displayWeather && 0 }}
    >
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <Navbar />
        <Display error={error} apiData={apiData} />
        <SearchBox
          setDisplayWeather={setDisplayWeather}
          setApiData={setApiData}
          setError={setError}
        />
      </div>

      {/* Right Column */}
      <div
        className={styles.rightColumn}
        style={{
          backgroundImage: `url(${
            displayWeather
              ? `${backgroundBase}${setBackground(
                  apiData.weather[0].id,
                  apiData.weather[0].icon
                )}`
              : `${themeBase}${bg}`
          }.jpg)`, // ---> When data is fetched set background image based on id and icon. Else based on whether it is day or toggler.
          borderBottomRightRadius: displayWeather && 0,
          borderTopLeftRadius: displayWeather && 0,
          borderBottomLeftRadius: displayWeather && 0,
          boxShadow: displayWeather && "none",
        }}
      >
        {/* When data is fetched successfully only then display the report in the right column. */}
        {displayWeather && <WeatherReport apiData={apiData} />}

        {/* Remove the toggler when displaying data */}
        {!displayWeather && <Toggler bg={bg} setBg={setBg} />}
      </div>
    </div>
  );
}
