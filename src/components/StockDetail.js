import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//import  for Ag Grid
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// import for chart
import { Line } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function useDetail() {
    return new URLSearchParams(useLocation().search);
}

function fetchStock(stockProps) {

    const url = `https://financialmodelingprep.com/api/v3/historical-chart/4hour/${stockProps}?apikey=9ab08009fbd5fad2a8563e517f485116`;

    return fetch(url)
        .then((res) => res.json())
        .catch((e) => {
            console.log(e);
        });
}

function Header(props) {
    return (
        <div className="headerDetail">
            <h2>Detail information of </h2>
            <h1>{props.specificStock}</h1>
        </div>
    );
}

function DatePick(props) {
    const searchDate = props.searchDate;
    const setSearchDate = props.setSearchDate;

    return (
        <div className="DatePick dateBox">
            <p>Pick Start Date</p>
            <DatePicker
                className="datePicker"
                placeholderText="Start Date"
                dateFormat="yyyy-MM-dd"
                selected={searchDate}
                onChange={(searchDate) => {
                    setSearchDate(new Date(searchDate));
                }}
            />
        </div>
    );
}

function DetailTable(props) {
    const [detailData, setDetailData] = useState([]);
    const columns = [
        { headerName: "Date", field: "date", width: 250 },
        { headerName: "Open", field: "open", width: 150 },
        { headerName: "High", field: "high", width: 150 },
        { headerName: "Low", field: "low", width: 150 },
        { headerName: "Close", field: "close", width: 150 },
        { headerName: "Volume", field: "volume", width: 150 }
    ]   

    useEffect(() => {
        if (detailData.length === 0) {
            fetchStock(props.stockProps)
                .then((elements) => elements.map((element) => {
                    return {
                        date: element.date.substring(0, 10),
                        open: element.open,
                        high: element.high,
                        low: element.low,
                        close: element.close,
                        volume: element.volume
                    }
                }))
                .then((tableData) => {
                    setDetailData(tableData);
                    props.setTableData(tableData);
                    props.setSearchDate(new Date(tableData[tableData.length - 1].date));
                })
        } else {
            const searchResult = detailData.filter((element) => {
                if (new Date(element.date).getTime() >= props.searchDate.getTime()) {
                    return {
                        date: element.date,
                        open: element.open,
                        high: element.high,
                        low: element.low,
                        close: element.close,
                        volume: element.volume
                    }
                }
            });
            props.setTableData(searchResult);
        }

    }, [props.searchDate]);

    return (
        <div className="ag-theme-balham stockDetailTable">
            <AgGridReact
                columnDefs={columns}
                rowData={props.tableData}
                pagination={true}
                paginationPageSize={30}
            />
        </div>
    );
}

function Chart(props) {
    const tableData = props.tableData.slice().reverse();
    const chartXValue = tableData.map((data) => {
        return data.date;
    });
    const chartYValue = tableData.map((data) => {
        return data.close;
    })
    const data = {
        labels: chartXValue,
        datasets: [{
            fill: false,
            lineTension: 0.2,
            backgroundColor: 'rgb(251, 255, 127)',
            borderColor: 'rgb(251, 255, 127)',
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgb(251, 255, 127)',
            pointBackgroundColor: 'rgb(251, 255, 127)',
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgb(251, 255, 127)',
            pointHoverBorderColor: 'rgb(255, 60, 60)',
            pointHoverBorderWidth: 2,
            label: "Closing Price",
            data: chartYValue
        }]
    }
    const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'rgb(78, 82, 80)'
                }
            }],
            yAxes: [{
                gridLines: {
                    color: 'rgb(78, 82, 80)'
                }
            }]
        }
    }

    return (
        <div className="detailChart">
            <h2>Chart for Closing Price</h2>  
            <Line data={data} options={options} />
        </div>
    );
}

function StockDetail(props) {
    const stockProps = useDetail().get("code");
    const specificStock = props.stockSymbol;
    const [tableData, setTableData] = useState([]);
    const [searchDate, setSearchDate] = useState();

    return (
        <div className="stockDetail">
            <Header specificStock={specificStock} />
            <DatePick searchDate={searchDate} setSearchDate={setSearchDate} />
            <DetailTable stockProps={stockProps} tableData={tableData} setTableData={setTableData} searchDate={searchDate} setSearchDate={setSearchDate} />
            <Chart tableData={tableData} />
        </div>
    );
}

export default StockDetail;