import React from "react";

function WeatherCard(props){
    return( 
        <div className="col-sm-6 other-details">
            <h4>{props.heading}</h4>
            <p>{props.body}</p>
        </div>  
     );
}

export default WeatherCard;