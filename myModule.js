module.exports = function (dirName, ext, callback) {
  const fs = require('fs');
  fs.readdir(dirName, (err, list) => {
    if (err) {
      return callback(err);
    }
    return callback(err, list, ext);
  });
}
