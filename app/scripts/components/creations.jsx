/* eslint-disable no-underscore-dangle */
import React from 'react';

import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

var Creations = React.createClass({
    getInitialState() {
        return {
            index: 0,
            direction: null,
            interval: 5000,
            controls: true,
            indicators: true,
            slide: true,
            items: [],
            portfolioUrl: 'http://www.mbucreations.com'
        };
    },

    handleSelect(selectedIndex, selectedDirection) {
        this.setState({
            index: selectedIndex,
            direction: selectedDirection
        });
    },

    generateCarouselItems() {
        return this.state.items.map((item, index) => {
            var component = null;

            if (item.type === 'img') {
                component = (
                    <CarouselItem key={index}>
                        <img className='img-responsive' alt='' src={item.path} />
                    </CarouselItem>
                );
            }

            return component;
        });
    },

    renderCarousel() {
        var { indicators, slide, interval, controls } = this.state;
        var prevIcon = <i className='fa fa-chevron-left' />;
        var nextIcon = <i className='fa fa-chevron-right' />;
        var carousel = (
            <div className="section-loader">
                <i className="fa fa-spinner fa-spin" />
            </div>
        );

        if (this.state.items.length > 0) {
            carousel = (
                <Carousel id='creations-slider'
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
    },

    componentWillMount() {

    },

    componentDidMount() {
        this.setState({
            items: global.__DATA__.creations || []
        });
    },

    render() {
        var linkTitle = 'mbu Creations Portfolio';
        var tooltip = <Tooltip id='creationsTooltip'>{linkTitle}</Tooltip>;
        var { portfolioUrl } = this.state;

        return (
            <section id='creations'>
                <div className='page-header'>
                    <h2>Creations <small>think it. dream it. create it.</small></h2>
                    <OverlayTrigger placement='left' overlay={tooltip}>
                        <a href={portfolioUrl}
                            target='_self'
                            tabIndex='0'
                            className='btn btn-primary btn-lg btn-link launch'
                            title={linkTitle}>
                            portfolio <i className='fa fa-chevron-circle-right' />
                        </a>
                    </OverlayTrigger>
                    <div className='clearfix'></div>
                </div>
                <p className='lead match-view'>
                    Along with some of the cool stuff I work on at work, I do projects on the side to keep my healthy appetite for latest technology and trends up to date.  Check some of these out below and by going to my portfolio.
                </p>
                <div className='creations-slider-container'>
                    {this.renderCarousel()}
                </div>
            </section>
        );
    }
});

export default Creations;
