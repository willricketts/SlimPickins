var irc = require('irc');
var request = require('request');

var actions = require('./actions/actions');

var client = new irc.Client(process.env.IRC_SERVER_HOST, 'Slim', {
  channels: ['#funhole']
});

client.addListener('message', function(from, to, message) {
  console.log(from + ' => ' + to + ': ' + message);

  if(message == 'BTC') {
    actions.cryptocurrencies.bitcoin();
  }
  else if(message == "DOGE") {
    actions.cryptocurrencies.dogecoin();
  }
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});
