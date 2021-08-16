import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Select from 'react-select';

//import  for Ag Grid
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";




function fetchStocks() {
    const url = "https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=9ab08009fbd5fad2a8563e517f485116";

    return fetch(url)
        .then((res) => res.json())
        .catch((e) => {
            console.log(e);
        });
}

function StockDataTable(props) {
    const searchTerm = props.searchTerm;
    const industrialTerm = props.industrialTerm.value;
    const [stocksData, setStocksData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const columns = [
        {
            headerName: "Symbol",
            field: "symbol",
            width: 100,
            cellRendererFramework: (params) => {
                return <Link to={`/history?code=${params.value}`} onClick={() => {
                    props.setStockSymbol(params.data.name);
                }}> {params.value} </Link>
            }
        },
        { headerName: "Name", field: "name", width: 400 },
        { headerName: "Industry", field: "industry", width: 300 }
    ];

    useEffect(() => {
        if (stocksData.length === 0) {
            fetchStocks()
                .then((data) =>
                    data.map((stock) => {
                        return {
                            symbol: stock.symbol,
                            name: stock.name,
                            industry: stock.sector
                        }
                    })
                )
                .then((stock) => {
                    setStocksData(stock);
                    setTableData(stock);
                });
        } else {
            const searchResult = stocksData.filter((stockData) => {
                if (stockData.symbol.includes(searchTerm.toUpperCase()) && industrialTerm === "All") {
                    return {
                        symbol: stockData.symbol,
                        name: stockData.name,
                        industry: stockData.industry
                    }
                } else if (stockData.symbol.includes(searchTerm.toUpperCase()) && stockData.industry === industrialTerm) {
                    return {
                        symbol: stockData.symbol,
                        name: stockData.name,
                        industry: stockData.industry
                    }
                }
            });
            setTableData(searchResult);
        }
    }, [searchTerm, industrialTerm]);

    return (
        <div className="ag-theme-balham stockTable">
            <AgGridReact
                columnDefs={columns}
                rowData={tableData}
                pagination={true}
                paginationPageSize={15}
            />
        </div>
    );
}

function Header() {
    return (
        <div className="header">
            <h1>List of Nasdaq 100 Companies</h1>
        </div>
    );
}

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const industryOption = [
        { label: "All", value: "All" },
        { label: "Consumer Defensive", value: "Consumer Defensive" },
        { label: "Consumer Cyclical", value: "Consumer Cyclical" },
        { label: "Healthcare", value: "Healthcare" },
        { label: "Industrials", value: "Industrials" },
        { label: "Communication Services", value: "Communication Services" },
        { label: "Technology", value: "Technology" },
        { label: "Utilities", value: "Utilities" }
    ];

    return (
        <div className="stockSearch">
            <div className="symbolSearch">
                <label>Search by Symbol</label><br />
                <input className="searchInput" type="text" name="symbolSearch" value={searchTerm} placeholder="Symbol.." onChange={
                    (e) => {
                        setSearchTerm(e.target.value);
                    }
                } />
                <button className="searchButton" type="search" onClick={() => {
                    props.onSearchSubmit(searchTerm);
                }}>Search</button>
            </div>
            <div className="industrySearch">
                <label>Filter by Industry</label>
                <Select value={props.industrialTerm} options={industryOption} onChange={
                    (value) => {
                        props.onIndustrialChanged(value);
                    }
                } />
            </div>
        </div>
    )
}

function Stocks(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [industrialTerm, setIndustrialTerm] = useState({ label: "All", value: "All" });

    return (
        <div className="stocks">
            <Header />
            <SearchBar onSearchSubmit={setSearchTerm} industrialTerm={industrialTerm} onIndustrialChanged={setIndustrialTerm} />
            <StockDataTable searchTerm={searchTerm} industrialTerm={industrialTerm} setStockSymbol={props.setStockSymbol} />
        </div>
    );
}

export default Stocks;