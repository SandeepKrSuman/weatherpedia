import React from "react";

function SearchBar(props){
    return ( 
        <form className="navigate-page" onSubmit={props.handleSubmit}>
            <input 
            type="text" 
            className="navigate-text" 
            placeholder="enter a city name" 
            autoComplete="off" 
            spellCheck="false" 
            name="inputvalue" 
            value = {props.value} 
            onChange={props.handleChange} 
            />
            <button type="submit" className="navigate-button"><i className="fas fa-search"></i></button>
        </form>
     );
}

export default SearchBar;