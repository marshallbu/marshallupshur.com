var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({

    render() {

        return (
            <div id="content">
                Oh hai!

                <div className="container">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = App;
