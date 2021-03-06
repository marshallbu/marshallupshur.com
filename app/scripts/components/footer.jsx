/* eslint-disable no-underscore-dangle, max-len */
import React from 'react';

import logger from './../modules/logger';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            version: '<!-- @echo APP_VERSION -->',
            copyYear: '<!-- @echo COPY_YEAR -->'
        };
    }

    componentDidMount() {
        this.setState({
            version: global.__DATA__.version,
            copyYear: global.__DATA__.copyYear,
        });

        logger.debug('Sniffing around? Email me(at)marshallupshur.com if you find any foobars!');
    }

    render() {
        var { version, copyYear } = this.state;
        // NOTE: had to use dangerouslySetInnerHTML for the values below, as none of the workarounds
        // would give the non HTML entity version for greater-than, less-than
        return (
            <footer>
                <div className='container'>
                    <p className='pull-left'>
                        <i className='fa fa-html5'></i>&nbsp;
                        <i className='fa fa-css3'></i>&nbsp;
                        <i className='fa fa-apple'></i>
                        <span className='site-version'>v<span dangerouslySetInnerHTML={{__html: version}}/></span>
                    </p>
                    <p className='pull-right'>
                        &copy; <span dangerouslySetInnerHTML={{__html: copyYear}}/> Marshall Upshur | <a href='http://mbucreations.com' tabIndex='0' className='btn-link' target='_self' title='Go to mbu Creations'>mbu Creations</a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
