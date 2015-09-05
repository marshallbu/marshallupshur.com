import React from 'react';
import GraphDance from './../modules/graph_dance';

var DynamicHeader = React.createClass({
    getInitialState() {
        return {
        };
    },

    componentDidMount() {
        var canvas = React.findDOMNode(this.refs.dynamicHeaderCanvas);
        GraphDance.animateOnCanvas(canvas);
    },

    componentWillUnmount() {
        GraphDance.removeListeners();
    },

    render() {
        return (
            <div id='dynamic-header'>
                <canvas ref='dynamicHeaderCanvas'/>
                <div className='jumbotron main-title'>
                    <h1>Marshall Upshur</h1>
                    <p>Software Engineer</p>
                </div>
            </div>
        );
    }
});

export default DynamicHeader;
