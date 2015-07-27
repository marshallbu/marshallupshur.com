/* eslint-disable no-underscore-dangle */
import React from 'react';

import About from './about.jsx';
import Creations from './creations.jsx';
import Footer from './footer.jsx';

var MainContent = React.createClass({

    render() {

        return (
            <div id="content">
                <div className="container">
                    <About />
                    <Creations />
                </div>

                <Footer />
            </div>
        );
    }
});

export default MainContent;
