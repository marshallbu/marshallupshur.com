
/**
* define a snackbar that popups when in resume area
*
*/
// var resumeEgg = ['$timeout', '$log', '$window', function ($timeout, $log, $window) {
//     return {
//         restrict: 'A',
//         link: function postLink(scope, element, attrs, controller) {
//             var resumeEl = $(element),
//                 $win = $($window),
//                 bar = null,
//                 snackShown = false;
//
//             function scrollCheck() {
//                 var fold = $win.height() + $win.scrollTop(),
//                     height = resumeEl.innerHeight(),
//                     top = resumeEl.offset().top,
//                     elFoldEnter = top + (height * 0.25),
//                     elFoldExit = top + height + (height * 0.25);
//
//                 var options = {
//                     content: 'hint hint, yes I\'m <i class="fa fa-binoculars fa-rotate-270"></i>',
//                     timeout: 0
//                 };
//
//                 if (fold > elFoldEnter && fold < elFoldExit) {
//                     if (!snackShown) {
//                         // use same instance if it exists, create a new one if not
//                         options.action = 'show';
//                         bar = bar !== null ? bar.snackbar(options) : $.snackbar(options);
//                         snackShown = true;
//                     }
//                 } else {
//                     if (bar && snackShown) {
//                         options.action = 'hide';
//                         bar = bar.snackbar(options);
//                         snackShown = false;
//                     }
//                 }
//             }
//
//             if (attrs.looking === 'true') {
//                 window.addEventListener('scroll', scrollCheck);
//                 scrollCheck();
//             }
//
//         }
//     };
// }];
//
// module.exports = resumeEgg;
