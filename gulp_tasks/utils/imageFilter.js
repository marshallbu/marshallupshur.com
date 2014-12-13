var path = require("path");

// Filters out non image files. Prevents
// accidental inclusion of possible hidden files
module.exports = function(name) {
  return /(\.(jpg|png|gif)$)/i.test(path.extname(name));
};
