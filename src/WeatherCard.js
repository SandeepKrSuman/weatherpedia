import React from "react";

function WeatherCard(props){
    return( 
        <div className="col-6 weather-cards">
            <div className="weather-card">
                <span className="crd-heading">{props.heading}</span>
                <br />
                <span className="crd-body">{props.body}</span>
            </div>
        </div>  
     );
}

export default WeatherCard;