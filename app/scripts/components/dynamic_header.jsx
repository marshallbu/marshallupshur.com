import React from 'react';
import GraphDance from './../modules/graph_dance';

var DynamicHeader = React.createClass({
    getInitialState() {
        return {
        };
    },

    render() {
        return (
            <div id='dynamic-header'>
                <canvas id='dynamic-header-canvas' />
                <div className='jumbotron main-title'>
                    <h1>Marshall Upshur</h1>
                    <p>Software Engineer</p>
                </div>
            </div>
        );
    }
});

export default DynamicHeader;
