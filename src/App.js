import React, { Component } from 'react';

import Navbar from "./components/Navbar";
import Graph from "./components/Graph";

// const cryptoAPI = require('./services/nomics');
const cryptoAPI = require('./services/cryptoCompare');


class App extends Component {
    render () {
        return (
            <React.Fragment>
                <Navbar/>
                <Graph
                    activeCurrency='BTC'
                    cryptoAPI={cryptoAPI}
                />
            </React.Fragment>
        );
    }
}


export default App;