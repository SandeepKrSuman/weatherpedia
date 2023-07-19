import React from "react";
import styles from "./Display.module.css";

// Initially displays the branding
// Later Used to display main informations
// like temperature, city name, and country
// based on the fetched api data
// which is received here as a prop

export default function Display(props) {
  return (
    <div className={styles.container}>
      <p className={styles.temph}>
        {props.apiData?.main.temp
          ? `${Math.round(props.apiData.main.temp)} ℃`
          : ""}
      </p>
      <p className={styles.mainh}>
        {props.apiData?.name ? props.apiData.name : "Weatherpedia"}
      </p>
      <p className={styles.subh}>
        {props.apiData?.sys.country
          ? props.apiData.sys.country
          : "feels like..."}
      </p>
      <br />
      {props.error && <p className={styles.errorMsg}>{props.error}</p>}
    </div>
  );
}
