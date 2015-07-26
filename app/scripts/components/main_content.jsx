import React from 'react';

import About from './about.jsx';
import Footer from './footer.jsx';

var MainContent = React.createClass({

    render() {

        return (
            <div id="content">
                <div className="container">
                    <About />
                </div>

                <Footer />
            </div>
        );
    }
});

export default MainContent;
