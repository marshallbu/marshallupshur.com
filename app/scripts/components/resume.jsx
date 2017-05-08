/* eslint-disable no-underscore-dangle */
import React from 'react';

import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed';

import classnames from 'classnames';

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxResumeUrl: 'https://app.box.com/embed/preview/d5h2wjrv3tjhrednrd26jhyvbke1h4ax?direction=ASC&theme=dark',
            resumeURL: 'downloads/Marshall_Upshur_2017a.pdf',
            blockScrolling: true,
            showResume: false
        };
    }

    disableScrollBlocker() {
        this.setState({
            blockScrolling: false
        });
    }

    componentDidMount() {
        this.setState({
            boxResumeUrl: global.__DATA__.boxResumeUrl,
            resumeURL: global.__DATA__.resumeUrl,
        });
    }

    renderResume() {
        var { boxResumeUrl } = this.state;
        const blocker = classnames(
            'scroll-blocker',
            {
                'hide': !this.state.blockScrolling
            }
        );

        return (
            <div id='resume-view' className={{}}>
                <div className='viewer embed-responsive embed-responsive-16by9'>
                    <ResponsiveEmbed a16by9>
                        <iframe src={boxResumeUrl} className='embed-responsive-item' allowFullScreen frameBorder={0} />
                    </ResponsiveEmbed>
                    <div className={blocker} onClick={this.disableScrollBlocker.bind(this)}>
                        <div className='scroll-blocker-title'>click to view</div>
                    </div>
                </div>
            </div>
        );
    }

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
                    {this.renderResume()}
                </div>
            </section>
        );
    }
}

export default Resume;
