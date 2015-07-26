import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

var Navigation = React.createClass({
    getInitialState() {
        return {
            navItems: [
                { className: '', href: '#about', title: 'About', value: 'About', onSelect: this.scrollTo },
                { className: '', href: '#creations', title: 'About', value: 'Creations', onSelect: this.scrollTo },
                { className: '', href: '#resume', title: 'About', value: 'Resume', onSelect: this.scrollTo },
                { className: '', href: '#blog', title: 'About', value: 'Blog', onSelect: this.scrollTo },
                { className: '', href: '#photos', title: 'Photos', value: <i className='fa fa-camera-retro' />, onSelect: this.scrollTo },
                { className: '', href: '#photos', title: 'Experiments', value: <i className='fa fa-flask' />, onSelect: this.scrollTo },
                { className: '', href: '#', title: 'Contact', value: <i className='fa fa-envelope' /> },
                { className: 'social', href: 'https://github.com/marshallbu', title: 'github', value: <i className='fa fa-github-alt' /> },
                { className: 'social', href: 'http://www.linkedin.com/in/marshallupshur', title: 'LinkedIn', value: <i className='fa fa-linkedin' /> },
                { className: 'social', href: 'http://twitter.com/mbuCreations', title: 'Twitter', value: <i className='fa fa-twitter' /> },
                { className: 'social', href: 'https://www.facebook.com/marshallbu', title: 'Facebook', value: <i className='fa fa-facebook' /> }
            ]
        };
    },

    scrollTo(eventKey, href, target) {
        // TODO: make this do the smooth scroll
        console.log(eventKey, href, target);
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
