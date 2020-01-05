import React, { Component } from 'react';

const {Chart: ChartJS} = require('chart.js');

const historicalClose = require('../../data/historical-close');

// --------------------------------------------------------------------------------------------------
import variables from '../../styles/_variables.scss';

ChartJS.defaults.global.defaultFontColor = variables.chartFontColor;
ChartJS.defaults.global.defaultFontFamily = "'Roboto', 'sans-serif'";
ChartJS.defaults.global.defaultFontSize = 13;
// ChartJS.defaults.global.defaultFontStyle = 'bold';

// --------------------------------------------------------------------------------------------------

const formatCurrency = (value, index, values) => {
    // noinspection JSCheckFunctionSignatures
    return value.toLocaleString("en-US",{style:"currency", currency:"USD"});
};

const getLabels = (obj) => {
    return Object.keys(obj);
};

const getData = (obj) => {
    return Object.values(obj);
};

// --------------------------------------------------------------------------------------------------
export default class Chart extends Component {
    constructor (props) {
        super(props);
    }
    
    componentDidMount () {
        this.renderChart();
    }
    
    renderChart () {
        let {type, data}  =this.props;
        let el = document.getElementById('graph').getContext('2d');
        new ChartJS(el, {
            type: type || 'line',
            data: {
                labels: data.map(item => new Date(item.time * 1000).toISOString().slice(0,10)),
                datasets: [{
                    label: this.props.title || '',
                    data: data.map(item => item.close),
                    backgroundColor: variables.chartBackgroundColor,
                    borderColor: variables.chartBorderColor
                }]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            maxTicksLimit: 4,
                            callback: formatCurrency
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            maxTicksLimit: 6
                        }
                    }]
                },
            }
        });
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.renderChart();
        }
    }
    
    render () {
        return (
            <div id="graph-container" className="chart">
                <canvas id="graph" className="canvas">
                </canvas>
            </div>
        );
    }
}

