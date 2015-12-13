/* global $ */
import React from 'react';

import logger from '../modules/logger';

var Experiments = React.createClass({

    bubble() {
        var rand = 0,
            lastUsed = '',
            count = 100,
            flask = $(this.refs.flask),
            animations = ['flip', 'bounce', 'rubberBand', 'shake', 'swing', 'tada'],
            length = animations.length;

        // animation function
        function animate() {
            // on animation end, schedule another bubble at a random time
            flask.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
                flask.removeClass(lastUsed);
                // re-bubble every 1-15 seconds
                setTimeout(animate, (Math.floor(Math.random() * 6) + 1) * 1000);
            });

            // pick random animation to use
            lastUsed = animations[Math.floor(Math.random() * length)];
            flask.addClass(lastUsed);
        }

        animate();
    },

    componentDidMount() {
        // TODO: rewrite this to not depend on jQuery
        if ($) {
            this.bubble();
        }
    },

    render() {

        return (
            <section id='experiments'>
                <div className='page-header'>
                    <h2>Experiments <small>tinker tinker tinker...</small></h2>
                </div>
                <div className='experiments-container'>
                    <div className='experiments'>
                        <div className='exp-title'>
                            coming soon <i id='exp-flask' className='fa fa-flask animated' ref='flask'/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

export default Experiments;
