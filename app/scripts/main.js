var $ = require('jquery'),
    angular = require('angular'),
    app = require('app');

window.name = "NG_DEFER_BOOTSTRAP!";

var $html = angular.element(document.getElementsByTagName('html')[0]);

angular.element().ready(function() {
  angular.resumeBootstrap([app.name]);
});

$(document).ready(function () {

  // TODO: move to a directive
  var navLinks;

  $('#creations-slider').carousel();

  navLinks = function(clicked) {
    var itemId;
    itemId = clicked.attr('href');
    return $('body').stop().scrollTo(itemId, 500);
  };

  $('a.scrollto').click(function() {
    var nav_clicked;
    nav_clicked = $(this);
    navLinks(nav_clicked);
    return false;
  });

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh');
  });
});
