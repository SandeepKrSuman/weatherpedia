import React from "react";

function Footer(){
    return ( 
        <footer>
        <div className="footer-container">
            <div className="row footer-row">
                <div className="col-sm-6 footer-text">
                    <p className="footer-txt">Open Sourse : <a href="https://github.com/SandeepKrSuman/weatherpedia" className="footer-link"><i className="fab fa-github"></i></a></p>
                    <p className="footer-txt"><a href="https://weatherstack.com/" className="footer-link">API</a> used</p>
                </div>
                <div className="col-sm-6 footer-covid">
                    <p className="footer-txt">Coronavirus cases are increasing day-by-day, stay safe.</p>
                    <p className="footer-txt">Check out trend of COVID-19 cases in india <a href="https://covid-19track.in/" className="footer-link">here.</a></p>
                </div>
            </div>
            <div className="footer-dev footer-txt">Made with ❤ by <a href="https://www.linkedin.com/in/sandeepkrsuman/" className="footer-link">SandeepKrSuman.</a></div>
        </div>
        </footer>
     );
}

export default Footer;