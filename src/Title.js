import React from "react";
import Navigate from "./Navigate";
import SearchBar from "./SearchBar";

function Title(props){
    return ( 
        <div className = "title-search-container">
            {props.temph !== "" ? <span className="temph">{props.temph}</span> : null}
            <br />
            <span className="mainh">{props.mainh}</span>
            <br />
            <span className="subh">{props.subh}</span>
            <br /><br />
            {props.caller === "homepage" ? <Navigate /> : <SearchBar handleChange={props.handleChange} handleSubmit={props.handleSubmit} value={props.value} />}
        </div>
     );
}

export default Title;