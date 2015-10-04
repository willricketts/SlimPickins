var irc = require('irc');
var request = require('request');

var actions = require('./actions/actions');

var client = new irc.Client(process.env.IRC_SERVER_HOST, 'Slim', {
  channels: ['#funhole']
});

client.addListener('message', function(from, to, message) {
  console.log(from + ' => ' + to + ': ' + message);
  
  switch(message) {
    case 'BTC':
      actions.cryptocurrencies.bitcoin();
      break;
    
    case 'DOGE':
      actions.cryptocurrencies.dogecoin();
      break;
      
    case: '!donate':
      client.say('#funhole', process.env.BTC_DONATION_WALLET);
      break;
    
    case: 'Slim':
      actions.greeting(from);
      break;
  }
});

client.addListener('error', function(message) {
    console.log('error: ', message);
});

module.exports = {
  client: client
};
