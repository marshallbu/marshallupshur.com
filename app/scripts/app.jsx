import React from 'react';

import Navigation from './components/navigation.jsx';
import DynamicHeader from './components/dynamic_header.jsx';

var App = React.createClass({

    render() {

        return (
            <div id='page'>
                <Navigation />
                <DynamicHeader />
            </div>
        );
    }
});

export default App;
