module.exports = {
  bitcoin: bitcoin,
  dogecoin: dogecoin
};

function bitcoin() {
  request("https://bitpay.com/api/rates/usd", function(err, response, body) {
    var res = JSON.parse(body);
    client.say('#funhole', '$' + res.rate);
  });
}

function dogecoin() {
  request('http://dogecoinaverage.com/BTC.json', function(err, response, body) {
    var res = JSON.parse(body);
    client.say('#funhole', 'Ƀ ' + res.markets[0].price);
  });
}
