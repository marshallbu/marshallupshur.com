var fs = require('fs'),
    onlyScripts = require('./utils/scriptFilter');

var tasks = fs.readdirSync(__dirname + '/tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
