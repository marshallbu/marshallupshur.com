/* eslint-disable no-underscore-dangle */
/* global google */
import React from 'react';

import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

import moment from 'moment';

var Blog = React.createClass({
    getInitialState() {
        return {
            showPosts: false,
            posts: []
        };
    },

    getDefaultProps: function() {
        return {
            blogUrl: 'http://blog.marshallupshur.com/feed/',
            numberOfPosts: 3
        };
    },

    parseFeed() {
        var { blogUrl, numberOfPosts } = this.props;
        if (google && google.load) {
            google.load('feeds', '1');

            google.setOnLoadCallback(() => {
                var feed = new google.feeds.Feed(blogUrl);
                feed.setNumEntries(numberOfPosts);
                feed.load((result) => {
                    if (!result.error) {
                        this.setState({
                            showPosts: true,
                            posts: result.feed.entries
                        });
                    } else {
                        // TODO: handle an error!
                    }
                });
            });
        }
    },

    componentDidMount() {
        this.parseFeed();
    },

    renderLoader() {
        var loader = (
            <div className='section-loader'>
                <i className='fa fa-spinner fa-spin' />
            </div>
        );

        if (this.state.showPosts) {
            loader = null;
        }
        return loader;
    },

    renderPosts() {
        var { posts } = this.state;
        var component = null, postComponents;

        if (this.state.posts.length !== 0) {
            postComponents = posts.map((post, index) => {
                var date = new Date(post.publishedDate);
                var formattedDate = moment(date).format('MM/DD/YY @ h:mma');
                return (
                    <div className='col-md-4' key={index}>
                        <div className='post'>
                            <h4 className='title'>{post.title}</h4>
                            <p className='meta'>
                                <small>{formattedDate}</small>
                            </p>
                            <p className='text' dangerouslySetInnerHTML={{__html: post.contentSnippet}} />
                            <p className='controls'>
                                <a href='{post.link}'
                                    className='btn btn-sm btn-mbu'
                                    tabIndex='0'
                                    title='View blog post titled {post.title}'>
                                    View post <i className='icon-double-angle-right' />
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
    },

    render() {
        var linkTitle = 'Blog';
        var tooltip = <Tooltip>{linkTitle}</Tooltip>;

        return (
            <section id='blog'>
                <div className='page-header'>
                    <h2>Blog <small>ramblings of a geek</small></h2>
                    <OverlayTrigger placement='left' overlay={tooltip}>
                        <a href={this.state.blogUrl}
                            target='_self'
                            tabIndex='0'
                            className='btn btn-primary btn-lg btn-link launch'
                            title='Blog'>
                            blog <i className='fa fa-chevron-circle-right' />
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
});

export default Blog;
