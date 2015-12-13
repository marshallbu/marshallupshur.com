/* eslint-disable no-underscore-dangle */
/* global $ */
import React from 'react';

import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import crocodoc from 'viewer';
import classnames from 'classnames';

var Resume = React.createClass({
    getInitialState() {
        return {
            boxResumeUrl: '',
            resumeURL: 'downloads/Marshall_Upshur_2015c.pdf',
            blockScrolling: true,
            showResume: false
        };
    },

    disableScrollBlocker() {
        this.setState({
            blockScrolling: false
        });
    },

    renderLoader() {
        var loader = (
            <div className='section-loader'>
                <i className='fa fa-spinner fa-spin'/>
            </div>
        );

        if (this.state.showResume) {
            loader = null;
        }
        return loader;
    },

    renderResume() {
        var view = classnames(
            {
                hide: !this.state.showResume
            }
        );
        var blocker = classnames(
            'scroll-blocker',
            {
                'hide': !this.state.blockScrolling
            }
        );
        return (
            <div id='resume-view' className={view}>
                <div className='viewer' ref='resumeViewer'></div>
                <div className={blocker} onClick={this.disableScrollBlocker}>
                    <div className='scroll-blocker-title'>click to view</div>
                </div>
            </div>
        );
    },

    componentWillMount() {

    },

    componentDidMount() {
        var viewerNode = this.refs.resumeViewer;

        this.setState({
            boxResumeUrl: global.__DATA__.boxResumeUrl,
            resumeURL: global.__DATA__.resumeUrl,
        });

        if ($) {
            this.viewer = crocodoc($).createViewer(viewerNode, {
                url: global.__DATA__.boxResumeUrl,
                // layout: viewer.LAYOUT_PRESENTATION
            });
            this.viewer.load();

            this.viewer.on('ready', () => {
                this.setState({
                    showResume: true
                });
            });
        }

    },

    componentWillUnmount() {
        if (this.viewer) {
            this.viewer.off('ready', () => {
                this.setState({
                    showResume: true
                });
            });
        }

    },

    render() {
        var linkTitle = 'Download Resume';
        var tooltip = <Tooltip id='resumeTooltip'>{linkTitle}</Tooltip>;
        var { resumeURL } = this.state;

        return (
            <section id='resume'>
                <div className='page-header'>
                    <h2>Resume <small>a summary of experience</small></h2>
                    <OverlayTrigger placement='left' overlay={tooltip}>
                        <a href={resumeURL}
                            target='_blank'
                            tabIndex='0'
                            className='btn btn-primary btn-lg btn-link launch'
                            title='Download Resume'>
                            resume <i className='fa fa-chevron-circle-right'/>
                        </a>
                    </OverlayTrigger>
                    <div className='clearfix'/>
                </div>
                <div className='resume-view-container'>
                    {this.renderLoader()}
                    {this.renderResume()}
                </div>
            </section>
        );
    }
});

export default Resume;
