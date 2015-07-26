import React from 'react';

var Footer = React.createClass({

    render() {

        return (
            <footer>
                <div className="container">
                    <p className="pull-left">
                        <i className="fa fa-html5"></i>&nbsp;
                        <i className="fa fa-css3"></i>&nbsp;
                        <i className="fa fa-apple"></i>
                        <span className="site-version">v</span>
                    </p>
                    <p className="pull-right">
                        &copy; Marshall Upshur | <a href="http://mbucreations.com" tabIndex="0" className="btn-link" target="_self" title="Go to mbu Creations">mbu Creations</a>
                    </p>
                </div>
            </footer>
        );
    }
});

export default Footer;


//<!-- @echo APP_VERSION -->
// <!-- @echo COPY_YEAR -->
