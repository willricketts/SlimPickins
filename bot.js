var irc = require('irc');
var request = require('request');

var client = new irc.Client(process.env.IRC_SERVER_HOST, 'Slim', {
  channels: ['#funhole']
});

client.addListener('message', function(from, to, message) {
  console.log(from + ' => ' + to + ': ' + message);
});

client.addListener('message', function(from, to, message) {
  if(message == 'BTC') {
    request("https://bitpay.com/api/rates/usd", function(err, response, body) {
      var res = JSON.parse(body);
      client.say('#funhole', '$' + res.rate);
    });
  }
  else if(message == "DOGE") {
    request('http://dogecoinaverage.com/BTC.json', function(err, response, body) {
      var res = JSON.parse(body);
      client.say('#funhole', 'Ƀ ' + res.markets[0].price);
    })
  }
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});
