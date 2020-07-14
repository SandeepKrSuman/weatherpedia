import React from "react";
import Navigate from "./Navigate";

function Title(){
    return ( 
        <div className = "text-container">
            <h1>Weatherpedia</h1>
            <h4>feels like...</h4>
            <Navigate />
        </div>
     );
}

export default Title;