import React from 'react';
import logo from '../images/logo.svg'

function HomePage() {
    return (
        <div>
            <img src={logo} className="logo" alt="logo" />
            <h1> Stock Prices </h1>
            <h2> 
                Welcome to the Stock Market Portal. You may click on Stocks to view all the available companies
                and filter the list by company symbols or industries. 
            </h2>
            <h2>
                By clicking the symbol of the stock, you are able to view Quote and Price History for the most recent one hundred days of information for a particular stock.
             </h2>
        </div>
    );
}

function Home() {
    return (
        <div className="home">
            <HomePage />
        </div>
    );
}

export default Home;