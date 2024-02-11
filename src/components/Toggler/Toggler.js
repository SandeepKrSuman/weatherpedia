import { FaMoon, FaSun } from "react-icons/fa";
import styles from "./Toggler.module.css";

// toggler to toggle the homepage background image to day or night
// positioned at the bottom right corner of the right column
// disappers when data is being displayed
// also set to display none using css when on shorter screens

export default function Toggler(props) {
  const handleToggle = () => {
    props.setBg(!props.bg);
  };

  return (
    <span className={styles.container}>
      <button className={styles.toggleBtn} onClick={handleToggle}>
        {props.bg ? <FaMoon /> : <FaSun />}
      </button>
    </span>
  );
}
