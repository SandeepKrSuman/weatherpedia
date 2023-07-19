import React, { useState } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import styles from "./SearchBox.module.css";

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.REACT_APP_KEY}&units=metric&q=`;

export default function SearchBox(props) {
  const [searchText, setSearchText] = useState(""); // stores input text i.e. city name.
  const [isLoading, setLoading] = useState(false); // while fetching data it is set true. False when over.

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.setError(""); // if there was previously any error, remove it.
    setLoading(true); // set loading true as soon as form is submitted. Set it false when going out of this funciton.

    // if text is empty return
    if (searchText === "") {
      setLoading(false);
      return;
    }

    const apiUrl = `${baseUrl}${searchText}`; // url with city name.

    setSearchText(""); // empty the input field.

    try {
      const response = await fetch(apiUrl); // fetch the data.
      const data = await response.json(); // parse to JSON.
      // console.log(data);

      if (parseInt(data.cod) === 200) {
        // if weather information fetched succeffully store it.
        // and set displayWeather as true in order to display in the right column.
        props.setApiData(data);
        props.setDisplayWeather(true);
      } else if (parseInt(data.cod) === 404) {
        // api returns 404 if city name was not found.
        props.setError("City Not Found.");
      } else {
        // handle any other error
        props.setError("Something Went Wrong.");
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      props.setError("Something Went Wrong.");
      setLoading(false);
      props.setDisplayWeather(false);
    }

    setLoading(false); // always setLoading as false before exiting the function.
  };

  return (
    <form className={styles.searchBox} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={isLoading ? "Loading . . ." : "enter a city name"}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        disabled={isLoading ? true : false} // if it is loading then disable the input field.
      />
      <button type="submit" className={styles.searchButton}>
        {isLoading ? (
          <FaSpinner className={styles.spinner} /> // if loading show loading spinner.
        ) : (
          <FaSearch className={styles.searchIcon} /> // else show the search icon.
        )}
      </button>
    </form>
  );
}
