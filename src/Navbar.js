import React from "react";

function Navbar(){
  const hrf = "";
    return ( 
<nav className="navbar navbar-expand-sm navbar-light">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href={hrf}>Home</a>
      <a className="nav-item nav-link" href="https://github.com/SandeepKrSuman/weatherpedia">OpenSource</a>
      <a className="nav-item nav-link" href="https://weatherstack.com/">API</a>
      <a className="nav-item nav-link" href="https://www.linkedin.com/in/sandeepkrsuman/">Developer</a>
    </div>
</nav>
     );
}

export default Navbar;