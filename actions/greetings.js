module.exports = {
  greeting: greeting
};

var client = require('../bot');

function greeting(from) {
  client.say('#funhole', 'Hello, ' + from);
}
