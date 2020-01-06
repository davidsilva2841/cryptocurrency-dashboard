import React, { Component } from 'react';

import Navbar from "./components/Navbar";
import Graph from "./components/Graph";
import ToolBar from "./components/ToolBar";
import News from "./components/News";

const cryptoAPI = require('./services/cryptoCompare');



class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeCurrency: 'BTC',
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
        cryptoAPI.getHistory(activeCurrency)
        // cryptoAPI.getHistoryDummy(activeCurrency)
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
        let {activeCurrency, data} = this.state;
        let currency = cryptoAPI.currencies[activeCurrency];
        return (
            <React.Fragment>
                
                <Navbar/>
                <ToolBar
                    handleSelectCoin={this.handleSelectCoin}
                    activeCurrency={currency}
                    cryptoAPI={cryptoAPI}
                />
                <div className='graph-news'>
                    <Graph
                        data={data}
                        activeCurrency={activeCurrency}
                        cryptoAPI={cryptoAPI}
                    />
                    <News
                        cryptoAPI={cryptoAPI}
                    />
                </div>

            </React.Fragment>
        );
    }
}


export default App;