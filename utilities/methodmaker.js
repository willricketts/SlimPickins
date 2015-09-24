module.exports = {
  parseCommand: parseCommand
};

function parseCommand(string) {
  // scrape the ! from the first position of the string
  var commandArray = string.substring(1, string.length).split(' ');
  var arguments = [];

  // set the command from the first word in the string
  var command = commandArray[0];

  // gather the arguments after the command
  for(var i = 1; i <= commandArray.length; i++) {
    arguments.push(commandArray[i]);
  }

  return {
    method: command,
    arguments: arguments
  };
}
