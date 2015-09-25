module.exports = {
  bitcoin: bitcoin,
  dogecoin: dogecoin
};

var request = require('request');
var client = require('../bot.js').client;

function bitcoin() {
  getBitcoinPrice(function(price) {
    client.say('#funhole', '$' + price);
  });
}

function dogecoin() {
  getDogecoinPrice(function(dogecoinPrice) {
    getBitcoinPrice(function(bitcoinPrice) {
      client.say('#funhole', '$' + (Math.round((dogecoinPrice * bitcoinPrice) * 100) / 100);
    });
  });
}

function getBitcoinPrice(callback) {
  request("https://bitpay.com/api/rates/usd", function(err, response, body) {
    callback(JSON.parse(body).rate);
  });
}

function getDogecoinPrice(callback) {
  request('http://dogecoinaverage.com/BTC.json', function(err, response, body) {
    callback(JSON.parse(body).markets[0].price)
  });
}
