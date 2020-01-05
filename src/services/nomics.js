const axios = require('axios');

const api = 'https://api.nomics.com/v1';
const key = '63e6f9979fd9bfe4730ae904a916b6be';

const dummyData = require('../data/nomics_historical');
// --------------------------------------------------------------------------------------------------

const currencies = {
    Bitcoin: 'BTC',
    'Bitcoin Cash': 'BCH',
    Ethereum: 'ETH',
    Litecoin: 'LTC',
    XRP: 'XRP',
};

const subtractDays = (days) => {
	let date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString();
};

const getHistory = (currency, start) => {
        (!start) ? start = subtractDays(30) : null;
        console.log(`FILE: nomics.js getHistory() | start: \n`, start);
        return axios.get(
            api + '/exchange-rates/history',
            {
                params: {
                    key: key,
                    currency: currency,
                    start: start
                }
            }
        )
};


const getHistoryDummy = (currency, start) => {
    return new Promise(resolve => {resolve(dummyData)});
};


module.exports.currencies = currencies;
module.exports.getHistory = getHistory;
module.exports.getHistoryDummy = getHistoryDummy;


// --------------------------------------------------------------------------------------------------
// const test0 = () => {
//     let params = {
//         params: {
//             key: key,
//             ids: ['BTC', 'ETH'],
//             interval: ['1d', '30d'],
//             convert: 'USD'
//         }
//     };
//     return axios.get('https://api.nomics.com/v1/currencies/ticker', params);
// };

