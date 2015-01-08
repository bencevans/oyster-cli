
/**
 * Module Dependencies
 */

var fs = require('fs');
var path = require('path');

var configPath = path.resolve(process.env.HOME, '.oyster.json');

module.exports.get = function(callback) {
  fs.exists(configPath, function(configExists) {
    if(!configExists) return callback(null, {});
    fs.readFile(configPath, 'utf8', function(err, data) {
      if(err) return callback(err);
      var config = {};
      try {
        config = JSON.parse(data);
      } catch (e) {
        return callback(e);
      }
      callback(null, config);
    });
  });
};

module.exports.set = function(data, callback) {
  fs.writeFile(configPath, JSON.stringify(data, null, 2), callback);
};