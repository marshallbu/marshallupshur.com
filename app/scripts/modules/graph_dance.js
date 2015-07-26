/**
 * To Amazon and Facebook, who desparately think you should be able to write graph problems in a
 * 15 minute phone screen to write Styles and PHP.
 */
/* eslint-disable max-depth, max-statements */
var { TweenLite } = global.com.greensock;
var { Circ } = global.com.greensock.easing;
var { requestAnimationFrame } = global;

var width, height, canvas, context, points = [], target, animateHeader = true;

/**
 * Circle 'class'
 * @param {Object} pos   position object
 * @param {Number} rad   radius of circle
 * @param {String} color rgb color
 */
function Circle(pos, rad, color) {
    // constructor
    (() => {
        this.pos = pos || null;
        this.radius = rad || null;
        this.color = color || null;
    })();

    this.draw = () => {
        if (!this.active) {
            return;
        }
        context.beginPath();
        context.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = `rgba(156, 217, 249, ${this.active})`;
        context.fill();
    };
}

/**
 * utility function to get distance between 2 points
 * @param {Object} p1
 * @param {Object} p2
 */
function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
}

/**
 * generate an array of random points within the display boundaries
 */
function generatePoints() {
    for (var x = 0; x < width; x = x + (width / 20)) {
        for (var y = 0; y < height; y = y + (height / 20)) {
            var px = x + Math.random() * (width / 20);
            var py = y + Math.random() * (height / 20);
            var p = {
                x: px,
                originX: px,
                y: py,
                originY: py
            };
            points.push(p);
        }
    }
}

/**
* thinking of our display as a "graph", create edges and vertices on points,
* with each vertex connecting to it's 5 nearest neighbors
*/
function linkPoints() {
    var closest, p1, p2, placed;

    // for each point find the 5 closest points
    for(var i = 0; i < points.length; i++) {
        closest = [];
        p1 = points[i];

        for (var j = 0; j < points.length; j++) {
            p2 = points[j];

            if (p1 !== p2) {
                placed = false;

                for (var k = 0; k < 5; k++) {
                    if (!placed) {
                        if (closest[k] === undefined) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }

                for (k = 0; k < 5; k++) {
                    if (!placed) {
                        if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                            closest[k] = p2;
                            placed = true;
                        }
                    }
                }
            }
        }

        p1.closest = closest;
    }

    // assign a circle to each point
    for (i in points) {
        var c = new Circle(points[i], 2 + (Math.random() * 2), 'rgba(255,255,255,0.3)');
        points[i].circle = c;
    }
}

function init(canvasId) {
    width = window.innerWidth;
    height = window.innerHeight;
    target = {
        x: width / 2,
        y: height / 2
    };

    canvas = document.getElementById(canvasId);
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext('2d');

    // generate our points
    generatePoints();
    // visually connect them
    linkPoints();
}

/**
* shift points to random locations using a tween
* @param {object} p   a point
*/
function shiftPoint(p) {
    TweenLite.to(
        p,
        1 + (1 * Math.random()),
        {
            x: p.originX - 50 + (Math.random() * 100),
            y: p.originY - 50 + (Math.random() * 100),
            ease: Circ.easeInOut,
            onComplete: () => shiftPoint(p)
        }
    );
}

/**
* draw line between point and closest neighbors
* @param {Object} p   a point
*/
function drawLines(p) {
    if (!p.active) { return; }
    for (var i in p.closest) {
        context.beginPath();
        context.moveTo(p.x, p.y);
        context.lineTo(p.closest[i].x, p.closest[i].y);
        context.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
        context.stroke();
    }
}

/**
 * animation function to run on each animation frame
 */
function animate() {
    var distance;
    if (animateHeader) {
        context.clearRect(0, 0, width, height);
        for (var i in points) {
            // detect points in range
            distance = Math.abs(getDistance(target, points[i]));
            if (distance < 4000) {
                points[i].active = 0.3;
                points[i].circle.active = 0.6;
            } else if (distance < 20000) {
                points[i].active = 0.1;
                points[i].circle.active = 0.3;
            } else if (distance < 40000) {
                points[i].active = 0.02;
                points[i].circle.active = 0.1;
            } else {
                points[i].active = 0;
                points[i].circle.active = 0;
            }

            drawLines(points[i]);
            points[i].circle.draw();
        }
    }
    requestAnimationFrame(animate);
}

/**
* initialize dynamic header animation
*/
function initAnimation() {
    animate();
    for(var i in points) {
        shiftPoint(points[i]);
    }
}

/**
* callback for mousemove event
* @param {Event} e
*/
function mouseMove(e) {
    var posX = 0, posY = 0;
    if (e.pageX || e.pageY) {
        posX = e.pageX;
        posY = e.pageY;
    } else if (e.clientX || e.clientY) {
        posX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    target.x = posX;
    target.y = posY;
}

/**
* callback for scroll event, turning off header animation if it is not in view
*/
function scrollCheck() {
    if (document.body.scrollTop > height) {
        animateHeader = false;
    } else {
        animateHeader = true;
    }
}

/**
 * callback for resize event
 */
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

/**
 * add event listeners
 */
function addListeners() {
    if(!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
}

/**
 * Main Module
 * @type {Object}
 */
var GraphDance = {
    animateOnCanvas(canvasId) {
        init(canvasId);
        initAnimation();
        addListeners();
    }
};

export default GraphDance;
