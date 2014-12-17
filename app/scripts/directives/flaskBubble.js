
/**
 * define flask bubble directive
 *
 */
flaskBubble = ['$timeout', '$log', function ($timeout, $log) {
  return {
    restrict: 'A',
    link: function postLink(scope, element, attrs, controller) {
      // let's just put a jiggle on the flask for now while I play with famo.us some more
      var rand = 0, lastUsed = '', count = 100, flask = $(element),
          animations = ['flip', 'bounce', 'rubberBand', 'shake', 'swing', 'tada'];

      // animation function
      function bubble() {
        // on animation end, schedule another bubble at a random time
        flask.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          flask.removeClass(lastUsed);
          // --count;
          // $log.debug('count: ', count);
          // if (count > 0) {
            // $log.debug(rand*1000);
            // re-bubble every 1-15 seconds
            $timeout(bubble, (Math.floor(Math.random()*10)+1)*1000);
          // }
        });

        // pick random animation to use
        lastUsed = animations[Math.floor(Math.random()*animations.length)];
        // $log.debug(lastUsed);
        flask.addClass(lastUsed);
      }

      bubble();
    }
  };
}];

module.exports = flaskBubble;
