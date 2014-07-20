/*global require: false */
// require.config({
//   paths: {
//     pdfCompatibility:     'lib/pdf/compatibility',
//     pdfl10n:              'lib/pdf/l10n',
//     pdf:                  'lib/pdf/pdf',
//     pdfViewer:            'lib/pdf/viewer',
//     ssp:                  'lib/ssp/embed'
//   },
//   shim: {

//     // pdfCompatibility: ['jquery'],
//     pdfl10n: ['pdfCompatibility'],
//     pdf: ['pdfl10n'],
//     pdfViewer: ['pdf']
//   }
// });

window.name = "NG_DEFER_BOOTSTRAP!";

(function (
    $, 
    _,
    angular, 
    app, 
    routes,
    translate
) {
    'use strict';

    var $html = angular.element(document.getElementsByTagName('html')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app.name]);
    });

    $(document).ready(function () {

        // TODO: move to a directive
        var navLinks;

        $('#creations-slider.carousel').carousel();

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
}(
    require('jquery'),
    require('lodash'),
    require('angular'),
    require('./app')
));
