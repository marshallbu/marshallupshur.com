/* eslint-disable no-underscore-dangle */
import React from 'react';

import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/CarouselItem';

var Creations = React.createClass({
    getInitialState() {
        return {
            index: 0,
            direction: null,
            interval: 5000,
            controls: true,
            indicators: true,
            slide: true,
            items: []
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

    componentDidMount() {
        this.setState({
            items: global.__DATA__.creations || []
        });
    },

    render() {

        return (
            <section id='creations'>
                <div className='page-header'>
                    <h2 className=''>Creations <small>think it. dream it. create it.</small></h2>
                    <a href='http://www.mbucreations.com' target='_self' tabIndex='0'
                    className='btn btn-primary btn-lg btn-link launch' title='mbu Creations Portfolio'
                    data-toggle='tooltip' data-placement='left'>
                    portfolio <i className='fa fa-chevron-circle-right'></i>
                </a>
                <div className='clearfix'></div>
            </div>
            <p className='lead match-view'>Along with some of the cool stuff I work on at work, I do projects on the side to keep my healthy appetite for latest technology and trends up to date.  Check some of these out below and by going to my portfolio.</p>
            <div className='creations-slider-container'>
                {this.renderCarousel()}
            </div>
            </section>
        );
    }
});

export default Creations;
