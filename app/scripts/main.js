var $ = require('jquery'),
    angular = require('angular'),
    app = require('app');

window.name = "NG_DEFER_BOOTSTRAP!";

var $html = angular.element(document.getElementsByTagName('html')[0]);

angular.element().ready(function() {
  angular.resumeBootstrap([app.name]);
});

$(document).ready(function () {

  $('#creations-slider').carousel();

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
  });
});
