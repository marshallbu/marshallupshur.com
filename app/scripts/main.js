import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx';
import logger from './modules/logger';

var Main = {
    start() {
        logger.debug('%cI wish I was cool like the cool kids, hanging out at Google ' +
                'with the "culture fits"...', 'font-style: italic; color: #ff8000');

        ReactDOM.render(<App />, document.getElementById('app'));
    }
};

Main.start();
