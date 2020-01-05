import React, { Component } from 'react';

import GraphToolBar from "./GraphToolBar";
import Chart from "./common/Chart";

class Graph extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeCurrency: props.activeCurrency,
            data: [
                {
                    "time": 1577232000,
                    "high": 7280.52,
                    "low": 7132.3,
                    "open": 7260.91,
                    "volumefrom": 15012.21,
                    "volumeto": 108513256.34,
                    "close": 7202.72,
                    "conversionType": "direct",
                    "conversionSymbol": ""
                }
            ]
        };
        this.handleSelectCoin = this.handleSelectCoin.bind(this);
    }
    
    componentDidMount () {
        this.fetchData(this.state.activeCurrency);
    }
    
    fetchData (activeCurrency) {
        let {cryptoAPI} = this.props;
        // cryptoAPI.getHistory(activeCurrency)
        cryptoAPI.getHistoryDummy(activeCurrency)
            .then(result => {
                console.log(`FILE: Graph.jsx () | result.data.Data.Data: \n`, result.data.Data.Data);
                this.setState({data: result.data.Data.Data});
            })
            .catch(error => {
                console.error(`FILE: Graph.jsx fetchData() | ERROR: \n`, error);
            });
    }
    
    handleSelectCoin = (e) => {
        let activeCurrency = e.target.value;
        this.setState({activeCurrency});
        this.fetchData(activeCurrency);
    };
    
    render () {
        let {cryptoAPI} = this.props;
        let {activeCurrency, data} = this.state;
        let currency = cryptoAPI.currencies[activeCurrency];
        return (
            <div className="graph module">
                <GraphToolBar
                    activeCurrency={currency}
                    handleSelectCoin={this.handleSelectCoin}
                    cryptoAPI={cryptoAPI}
                />
                <Chart
                    type='line'
                    title={currency}
                    data={data}
                />
            </div>
        );
    }
}


export default Graph;



