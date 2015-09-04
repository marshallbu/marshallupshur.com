/* eslint-disable max-len */
import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Scrollspy from './../vendor/scrollspy.jsx';;

var Navigation = React.createClass({
    getInitialState() {
        return {
            navItems: [
                {
                    className: '',
                    href: '#about',
                    title: 'About',
                    value: 'About',
                    eventKey: 'about',
                    onClick: this.scrollTo,
                    sectionId: 'about'
                },
                {
                    className: '',
                    href: '#creations',
                    title: 'Creations',
                    value: 'Creations',
                    eventKey: 'creations',
                    onClick: this.scrollTo,
                    sectionId: 'creations'
                },
                {
                    className: '',
                    href: '#resume',
                    title: 'Resume',
                    value: 'Resume',
                    eventKey: 'resume',
                    onClick: this.scrollTo,
                    sectionId: 'resume'
                },
                {
                    className: '',
                    href: '#blog',
                    title: 'Blog',
                    value: 'Blog',
                    eventKey: 'blog',
                    onClick: this.scrollTo,
                    sectionId: 'blog'
                },
                {
                    className: '',
                    href: '#photos',
                    title: 'Photos',
                    value: <i className='fa fa-camera-retro' />,
                    eventKey: 'photos',
                    onClick: this.scrollTo,
                    sectionId: 'photos'
                },
                {
                    className: '',
                    href: '#experiments',
                    title: 'Experiments',
                    value: <i className='fa fa-flask' />,
                    eventKey: 'experiments',
                    onClick: this.scrollTo,
                    sectionId: 'experiments'
                },
                { className: '', href: '#', title: 'Contact', value: <i className='fa fa-envelope' /> },
                {
                    className: 'social',
                    href: 'https://github.com/marshallbu',
                    target: '_self',
                    title: 'github',
                    value: <i className='fa fa-github-alt' />
                },
                {
                    className: 'social',
                    href: 'http://www.linkedin.com/in/marshallupshur',
                    target: '_self',
                    title: 'LinkedIn',
                    value: <i className='fa fa-linkedin' />
                },
                {
                    className: 'social',
                    href: 'http://twitter.com/mbuCreations',
                    target: '_self',
                    title: 'Twitter',
                    value: <i className='fa fa-twitter' />
                },
                {
                    className: 'social',
                    href: 'https://www.facebook.com/marshallbu',
                    target: '_self',
                    title: 'Facebook',
                    value: <i className='fa fa-facebook' />
                }
            ]
        };
    },

    scrollTo(eventKey, href, target) {
        // TODO: make this do the smooth scroll
        // console.log(eventKey, href, target);
    },

    generateNavItems() {
        return this.state.navItems.map((item, index) => (
            <NavItem {...item} tabIndex='0' key={index}>{item.value}</NavItem>
        ));
    },

    render() {

        return (
            <Navbar
                brand={<a href='/'>Marshall Upshur</a>}
                fixedTop
                inverse
                fluid
                role='navigation'
                componentClass={'header'}
                toggleNavKey={0}>
                <Nav right eventKey={0} componentClass={'div'}>
                    {this.generateNavItems()}
                </Nav>
            </Navbar>
        );
    }
});

export default Navigation;
