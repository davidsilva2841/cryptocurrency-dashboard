import React, { Component } from 'react';

import Chart from "./common/Chart";

class Graph extends Component {
    constructor (props) {
        super(props);
    }
    

    render () {
        let {activeCurrency, data, cryptoAPI} = this.props;
        let currency = cryptoAPI.currencies[activeCurrency];
        return (
            <div className="graph module">
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



