/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import logger from './../modules/logger';

import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import { parseString } from 'xml2js';
import _get from 'lodash/get';

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
        var { photosFeedUrl } = this.props;
        const self = this;

        if (fetch) {
            fetch(photosFeedUrl)
                .then((response) => {
                    return response.text();
                }).then((text) => {
                    parseString(text, (err, result) => {
                        const photos = [];

                        if (err) {
                            logger.info('parsing response failed');
                        }

                        const channels = _get(result, 'rss.channel', []);
                        channels.forEach((item) => {
                            photos.push({
                                title: _get(item, 'item[0].title', ''),
                                url: _get(item, 'item[0][\'media:content\'][0].$.url', '')
                            });
                        });

                        self.setState({
                            showPhotos: true,
                            photos
                        });
                    });
                }).catch((ex) => {
                    logger.info('fetching feed failed', ex);
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

        if (this.state.showPhotos) {
            loader = null;
        }
        return loader;
    }

    generateCarouselItems() {

        return this.state.photos.map((photo, index) => {
            let component = null;
            component = (
                <CarouselItem key={index}>
                    <img
                        className='img-responsive'
                        alt={photo.title}
                        src={photo.url.replace('medium_large', 'huge')}/>
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
        const linkTitle = 'View Photos';
        const tooltip = <Tooltip id='photosTooltip'>{linkTitle}</Tooltip>;
        const { photosUrl } = this.props;

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

Photos.propTypes = {
    photosFeedUrl: PropTypes.string.isRequired,
    photosUrl: PropTypes.string.isRequired,
    numberOfPosts: PropTypes.number.isRequired
};

Photos.defaultProps = {
    photosUrl: 'http://photos.marshallupshur.com',
    photosFeedUrl: 'http://testphotos.marshallupshur.com/feed/albums/1/recent.rss',
    numberOfPosts: 3
};

export default Photos;
