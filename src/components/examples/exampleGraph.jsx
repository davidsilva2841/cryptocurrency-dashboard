import React, { Component } from 'react';

const {Chart} = require('chart.js');
// const historicalClose = require('../data/historical-close');


class Graph extends Component {
    componentDidMount () {
        let el = document.getElementById('graph').getContext('2d');
        
        console.log(el);
        var chart = new Chart(el, {
            // The type of chart we want to create
            type: 'line',
            
            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            
            // Configuration options go here
            options: {}
        });
    }
    
    render () {
        
        return (
            <div>
                <canvas id="graph"></canvas>
            </div>
        );
    }
}


export default Graph;


