import React from "react";
import Navigate from "./Navigate";

function Title(){
    return ( 
        <div className = "title-search-container">
            <span className="mainh">Weatherpedia</span>
            <br />
            <span className="subh">feels like...</span>
            <br /><br />
            <Navigate />
        </div>
     );
}

export default Title;