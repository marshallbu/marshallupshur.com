import React from 'react';

import Navigation from './components/navigation.jsx';
import DynamicHeader from './components/dynamic_header.jsx';
import MainContent from './components/main_content.jsx';

var App = React.createClass({

    render() {

        return (
            <div id='page'>
                <Navigation />
                <DynamicHeader />
                <MainContent />
            </div>
        );
    }
});

export default App;
