import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/Home';
import Stocks from './components/Stocks';
import StockDetail from './components/StockDetail';

import './App.css';

function App() {
    const [stockSymbol, setStockSymbol] = useState("");

    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <div className="brand">
                            <h2>
                                Stock Prices
                            </h2>
                        </div>
                        <li>
                            <Link className="route" to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="route" to="/stocks">Stocks</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/stocks">
                        <Stocks setStockSymbol={setStockSymbol} />
                    </Route>
                    <Route path="/history">
                        <StockDetail stockSymbol={stockSymbol} />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;