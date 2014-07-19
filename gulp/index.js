var fs = require('fs'),
    onlyScripts = require('./utils/scriptFilter');

var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});