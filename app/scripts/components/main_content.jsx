/* eslint-disable no-underscore-dangle */
import React from 'react';

import About from './about.jsx';
import Creations from './creations.jsx';
import Resume from './resume.jsx';
import Blog from './blog.jsx';
import Photos from './photos.jsx';
import Experiments from './experiments.jsx';
import Footer from './footer.jsx';

class MainContent extends React.Component {

    render() {
        return (
            <div id='content'>
                <div className='container'>
                    <About/>
                    <Creations/>
                    <Resume/>
                    <Blog/>
                    <Photos/>
                    <Experiments/>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default MainContent;
