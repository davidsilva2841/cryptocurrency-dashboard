const result = require('./src/data/crypto_historical');

let data = result.Data.Data;
let y = data.map(item => item.close);
let x = data.map(item => new Date(item.time * 1000).toISOString().slice(0,10));

