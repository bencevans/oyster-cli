
/**
 * Module Dependencies
 */

var fs = require('fs');
var path = require('path');
var os = require('os');

var configFilePath = path.resolve(process.env.HOME, '.oyster');

var getConfig = function(callback) {
  fs.readFile(configFilePath, 'utf8', function(err, body) {
    if(err) return callback(err);

    var config = {};

    body = body.split(os.EOL);

    for (var i = body.length - 1; i >= 0; i--) {
      var match = body[i].match(/(.+)=(.+)/);
      if(match) {
        config[match[1].trim()] = match[2].trim();
      }
    }

    return callback(null, config);

  });
};

module.exports = getConfig;