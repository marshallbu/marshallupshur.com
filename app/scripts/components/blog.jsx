/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import logger from './../modules/logger';

import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

import moment from 'moment';
import 'whatwg-fetch';

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showPosts: false,
            posts: []
        };
    }

    parseFeed() {
        const { blogFeedUrl, numberOfPosts } = this.props;
        const self = this;

        if (fetch) {
            fetch(`${blogFeedUrl}&per_page=${numberOfPosts}`)
                .then((response) => {
                    return response.json();
                }).then((json) => {
                    self.setState({
                        showPosts: true,
                        posts: json
                    });
                }).catch((ex) => {
                    logger.info('parsing failed', ex);
                });
        }
    }

    componentDidMount() {
        this.parseFeed();
    }

    renderLoader() {
        let loader = (
            <div className='section-loader'>
                <i className='fa fa-spinner fa-spin'/>
            </div>
        );

        if (this.state.showPosts) {
            loader = null;
        }
        return loader;
    }

    renderPosts() {
        const { posts } = this.state;
        let component = null;
        let postComponents;

        if (posts.length !== 0) {
            postComponents = posts.map((post, index) => {
                const date = new Date(post.date);
                const formattedDate = moment(date).format('MM/DD/YY @ h:mma');
                return (
                    <div className='col-md-4' key={index}>
                        <div className='post'>
                            <h4 className='title'>{post.title.rendered}</h4>
                            <p className='meta'>
                                <small>{formattedDate}</small>
                            </p>
                            <p className='text' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                            <p className='controls'>
                                <a href={post.link}
                                    className='btn btn-sm btn-mbu'
                                    tabIndex='0'
                                    title={`View blog post titled ${post.title.rendered}`}>
                                    View post <i className='icon-double-angle-right'/>
                                </a>
                            </p>
                        </div>
                    </div>
                );
            });

            component = (
                <div className='row'>
                    {postComponents}
                </div>
            );
        }

        return component;
    }

    render() {
        const linkTitle = 'Blog';
        const tooltip = <Tooltip id='blogTooltip'>{linkTitle}</Tooltip>;
        const { blogUrl } = this.props;

        return (
            <section id='blog'>
                <div className='page-header'>
                    <h2>Blog <small>ramblings of a geek</small></h2>
                    <OverlayTrigger placement='left' overlay={tooltip}>
                        <a href={blogUrl}
                            target='_self'
                            tabIndex='0'
                            className='btn btn-primary btn-lg btn-link launch'
                            title={linkTitle}>
                            blog <i className='fa fa-chevron-circle-right'/>
                        </a>
                    </OverlayTrigger>
                    <div className='clearfix'></div>
                </div>
                <div className='blog-updates-container'>
                    {this.renderLoader()}
                    {this.renderPosts()}
                </div>
            </section>
        );
    }
}

Blog.propTypes = {
    blogFeedUrl: PropTypes.string.isRequired,
    blogUrl: PropTypes.string.isRequired,
    numberOfPosts: PropTypes.number.isRequired
};

Blog.defaultProps = {
    blogUrl: 'http://blog.marshallupshur.com',
    blogFeedUrl: 'http://blog.marshallupshur.com/wp-json/wp/v2/posts?context=embed',
    numberOfPosts: 3
};

export default Blog;
