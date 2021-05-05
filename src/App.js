import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import path from "path";
import dotenv from "dotenv";

import Navbar from './components/Navibar/NaviBar.js';

dotenv.config({path: path.join(__dirname,".env")})

const companies = [
  {
    "symbol": "AAL",
    "name": " Advance Auto Parts",
    "industry": "Industrials"
  },
  {
    "symbol": "A",
    "name": "Agilent Technologies",
    "industry": "Biotechnology"
  },
  {
    "symbol": "ABR",
    "name": "Arbor Realty",
    "industry": "Real Estate Investment"
  },
  {
    "symbol": "ACC",
    "name": "American Campus Communities",
    "industry": "Real Estate Investment"
  },
  {
    "symbol": "AESC",
    "name": "The AES Corporation",
    "industry": "Electric Utilities"
  },
];


function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex flex-column align-items-center mb-3">
        <div className="text-center">
          <h1>Stocks Prices</h1>
          <p>
            Welcome to the Stock Market Portal. You may click on stocks to view all the available companies
            or Quote to get the latest price information by stock symbol, or choose Price History or search to
            sample from the most recent one hundred days of information for a particular stock.
      </p>
        </div>
        <div className="stocks">
          <h3>
            Stock List
        </h3>
          {
            companies.map(company => (
              <div>
                <p>
                  {company.symbol}
                </p>
                <p>
                  {company.name}
                </p>
                <p>
                  {company.industry}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
