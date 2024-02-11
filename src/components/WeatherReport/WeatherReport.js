import styles from "./WeatherReport.module.css";
import Card from "../Card/Card";

// Used to display the weather informations fetched from the api
// with the help of <Card /> component where data is sent via props.
// The main component is a 3 x 2 grid with <Card /> in each cell.
// Two additional boxes are present at the top and bottom of the grid to display respective information.

export default function WeatherReport(props) {
  return (
    <div className={styles.container}>
      <span className={styles.description}>
        {props.apiData.weather[0].description}
      </span>
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <Card
            heading="Min/Max"
            body={`${Math.round(props.apiData.main.temp_min)} ℃ / ${Math.round(
              props.apiData.main.temp_max
            )} ℃`}
          />
        </div>
        <div className={styles.gridItem}>
          <Card heading="Humidity" body={`${props.apiData.main.humidity} %`} />
        </div>
        <div className={styles.gridItem}>
          <Card
            heading="Wind Speed"
            body={`${Math.round(props.apiData.wind.speed * 3.6)} km/h`}
          />
        </div>
        <div className={styles.gridItem}>
          <Card
            heading="Pressure"
            body={`${props.apiData.main.pressure} hPa`}
          />
        </div>
        <div className={styles.gridItem}>
          <Card heading="Clouds" body={`${props.apiData.clouds.all} %`} />
        </div>
        <div className={styles.gridItem}>
          <Card
            heading="Visibility"
            body={`${Math.round(props.apiData.visibility / 1000)} km`}
          />
        </div>
      </div>
      <span className={styles.feelsLike}>{`Feels Like ${Math.round(
        props.apiData.main.feels_like
      )} ℃`}</span>
    </div>
  );
}
