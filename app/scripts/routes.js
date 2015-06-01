var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;

var App = require('./app');
var MainContent = require('./components/main_content');
var RouteNotFound = require('./components/route_not_found');

var Routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute name="default" handler={MainContent} />
        <NotFoundRoute name="route-not-found" handler={RouteNotFound} />
    </Route>
);

module.exports = Routes;
