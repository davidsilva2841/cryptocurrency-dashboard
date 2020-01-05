const axios = require('axios');

let key = 'aefbb924a3a5552b5bb59f66259884beb77caeb50aa5efc67fc270f8c443e1ad';
let api = 'https://min-api.cryptocompare.com/data/v2';

const dummyData = require('../data/crypto_historical');
// --------------------------------------------------------------------------------------------------

const currencies = {
    BTC: 'Bitcoin',
    BCH: 'Bitcoin Cash',
    ETH: 'Ethereum',
    LTC: 'Litecoin',
    XRP: 'XRP'
};


const getHistory = (id) => {
    return axios.get(
        api + '/histoday',
        {
            params: {
                key: key,
                fsym: id,
                tsym: 'USD',
                limit: 10
            }
        }
    )
};


const getHistoryDummy = (id) => {
    return new Promise(resolve => {resolve(dummyData)});
};




module.exports.currencies = currencies;
module.exports.getHistory = getHistory;
module.exports.getHistoryDummy = getHistoryDummy;



