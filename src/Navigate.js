import React from "react";
import {Link} from "react-router-dom";

function Navigate(){
    return ( 
        <div className="navigate-page">
            <span className = "navigate-text">Make a Search</span>
            <button className = "navigate-button"><Link to ="/weather"><i className="fas fa-arrow-right"></i></Link></button>
        </div>
     );
}

export default Navigate;