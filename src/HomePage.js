import React, {useState} from "react";
import Navbar from "./Navbar";
import Title from "./Title";

function HomePage(){

    const dt = new Date().getHours();
    const d = (dt >= 6 && dt <= 18) ? true : false;

    const [isDay, setDay] = useState(d);

        function handleTheme(){
            setDay(!isDay);
        }


    const theme = { backgroundImage: `url(https://raw.githubusercontent.com/SandeepKrSuman/weather_assets/master/weather_backgrounds/themechange_${isDay}.jpg)` };
        

    return ( 
        <div className = "container-fluid">
            <div className = "row homepage-styl">
                <div className = "col-md-6">
                    <Navbar />
                    <Title 
                    caller="homepage" 
                    mainh="Weatherpedia" 
                    subh="feels like..." 
                    />
                </div>
                <div className = "col-md-6 home-img" style = {theme}>
                    <span className="theme-change-btns">
                    <button onClick = {handleTheme} className="theme-change-btn"><i className={isDay ? "fas fa-moon": "fas fa-sun"}></i></button>
                    </span>
                </div>
            </div>
        </div>
     );

}

export default HomePage;