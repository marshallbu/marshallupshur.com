/* eslint-disable no-underscore-dangle */
/* global google */
import React from 'react';

import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

class Photos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPhotos: false,
            index: 0,
            direction: null,
            interval: 5000,
            controls: true,
            indicators: true,
            slide: true,
            photos: []
        };
    }

    parseFeed() {
        var { photosFeedUrl, numberOfPosts } = this.props;
        if (google && google.load) {
            google.load('feeds', '1');

            google.setOnLoadCallback(() => {
                var feed = new google.feeds.Feed(photosFeedUrl);
                feed.setNumEntries(numberOfPosts);
                feed.load((result) => {
                    if (!result.error) {
                        this.setState({
                            showPhotos: true,
                            photos: result.feed.entries
                        });
                    } else {
                        // TODO: handle an error!
                    }
                });
            });
        }
    }

    componentDidMount() {
        this.parseFeed();
    }

    renderLoader() {
        var loader = (
            <div className='section-loader'>
                <i className='fa fa-spinner fa-spin'/>
            </div>
        );

        if (this.state.showPhotos) {
            loader = null;
        }
        return loader;
    }

    generateCarouselItems() {
        return this.state.photos.map((photo, index) => {
            var component = null;
            var contents = photo.mediaGroups[0].contents[0];
            var pubDate = new Date(photo.publishedDate);

            component = (
                <CarouselItem key={index}>
                    <img
                        className='img-responsive'
                        alt={contents.title}
                        src={contents.url.replace('medium_large', 'huge')}/>
                </CarouselItem>
            );


            return component;
        });
    }

    renderCarousel() {
        var { indicators, slide, interval, controls } = this.state;
        var prevIcon = <i className='fa fa-chevron-left'/>;
        var nextIcon = <i className='fa fa-chevron-right'/>;
        var carousel = (
            <div className='section-loader'>
                <i className='fa fa-spinner fa-spin'/>
            </div>
        );

        if (this.state.photos.length > 0) {
            carousel = (
                <Carousel id='photos-slider'
                    prevIcon={prevIcon}
                    nextIcon={nextIcon}
                    controls={controls}
                    indicators={indicators}
                    slide={slide}
                    interval={interval}>
                    {this.generateCarouselItems()}
                </Carousel>
            );
        }

        return carousel;
    }

    render() {
        var linkTitle = 'View Photos';
        var tooltip = <Tooltip id='photosTooltip'>{linkTitle}</Tooltip>;
        var { photosUrl } = this.props;

        return (
            <section id='photos'>
                <div className='page-header'>
                    <h2>Photos <small>the world through my eyes</small></h2>
                    <OverlayTrigger placement='left' overlay={tooltip}>
                        <a href={photosUrl}
                            target='_self'
                            tabIndex='0'
                            className='btn btn-primary btn-lg btn-link launch'
                            title={linkTitle}>
                            photos <i className='fa fa-chevron-circle-right'/>
                        </a>
                    </OverlayTrigger>
                    <div className='clearfix'></div>
                </div>

                <div className='photos-slider-container'>
                    {this.renderCarousel()}
                </div>
            </section>
        );
    }
}

Photos.defaultProps = {
    photosUrl: 'http://photos.marshallupshur.com',
    photosFeedUrl: 'http://testphotos.marshallupshur.com/feed/albums/1/recent.rss',
    numberOfPosts: 3
};

export default Photos;
