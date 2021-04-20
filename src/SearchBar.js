import React from "react";

function SearchBar(props){
    return ( 
        <form className="navigate-page" onSubmit={props.handleSubmit}>
            <input 
            type="text" 
            className="navigate-text" 
            placeholder={props.loading ? " Loading ..." : "enter a city name"}
            autoComplete="off" 
            spellCheck="false" 
            name="inputvalue" 
            value = {props.value} 
            onChange={props.handleChange} 
            disabled = {props.loading ? true : false} 
            />
            <button type="submit" className="navigate-button" disabled = {props.loading ? true : false}>{props.loading ? <i className="fas fa-spinner"></i> : <i className="fas fa-search"></i>}</button>
        </form>
     );
}

export default SearchBar;