/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Modal from 'react-bootstrap/lib/Modal';

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                {
                    className: '',
                    href: '#about',
                    title: 'About',
                    value: 'About',
                    eventKey: 'about',
                    onClick: this.scrollTo.bind(this)
                },
                {
                    className: '',
                    href: '#creations',
                    title: 'Creations',
                    value: 'Creations',
                    eventKey: 'creations',
                    onClick: this.scrollTo.bind(this)
                },
                {
                    className: '',
                    href: '#resume',
                    title: 'Resume',
                    value: 'Resume',
                    eventKey: 'resume',
                    onClick: this.scrollTo.bind(this)
                },
                {
                    className: '',
                    href: '#blog',
                    title: 'Blog',
                    value: 'Blog',
                    eventKey: 'blog',
                    onClick: this.scrollTo.bind(this)
                },
                {
                    className: '',
                    href: '#photos',
                    title: 'Photos',
                    value: <i className='fa fa-camera-retro'/>,
                    eventKey: 'photos',
                    onClick: this.scrollTo.bind(this)
                },
                {
                    className: '',
                    href: '#experiments',
                    title: 'Experiments',
                    value: <i className='fa fa-flask'/>,
                    eventKey: 'experiments',
                    onClick: this.scrollTo.bind(this)
                },
                {
                    className: '',
                    href: '#',
                    title: 'Contact',
                    value: <i className='fa fa-envelope'/>,
                    onClick: this.showContactModal.bind(this)
                },
                {
                    className: 'social',
                    href: 'https://github.com/marshallbu',
                    target: '_self',
                    title: 'github',
                    value: <i className='fa fa-github-alt'/>
                },
                {
                    className: 'social',
                    href: 'http://www.linkedin.com/in/marshallupshur',
                    target: '_self',
                    title: 'LinkedIn',
                    value: <i className='fa fa-linkedin'/>
                },
                {
                    className: 'social',
                    href: 'http://twitter.com/mbuCreations',
                    target: '_self',
                    title: 'Twitter',
                    value: <i className='fa fa-twitter'/>
                },
                {
                    className: 'social',
                    href: 'https://www.facebook.com/marshallbu',
                    target: '_self',
                    title: 'Facebook',
                    value: <i className='fa fa-facebook'/>
                }
            ]
        };
    }

    showContactModal() {
        var header = (
            <Modal.Header closeButton key='modalHeader'>
                <Modal.Title>Contact Me!</Modal.Title>
            </Modal.Header>
        );
        var body = (
            <Modal.Body key='modalBody'>
                <p style={{ textAlign: 'center' }}>
                    Send an email to <strong><a href='mailto:me@marshallupshur.com?subject=Hi Marshall!'>me(at)marshallupshur.com</a></strong>
                </p>
            </Modal.Body>
        );
        var footer = (
            <Modal.Footer key='modalFooter'>
                <Button onClick={this.props.hideModal}>Close</Button>
            </Modal.Footer>
        );

        this.props.showModal([header, body, footer]);
    }

    scrollTo(/*eventKey, href, target*/) {
        // TODO: make this do the smooth scroll
        // console.log(eventKey, href, target);
    }

    generateNavItems() {
        return this.state.navItems.map((item, index) => (
            <NavItem {...item} tabIndex='0' key={index}>{item.value}</NavItem>
        ));
    }

    render() {

        return (
            <Navbar inverse fixedTop fluid componentClass={'header'}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='/'>Marshall Upshur</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {this.generateNavItems()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

Navigation.propTypes = {
    hideModal: PropTypes.boolean,
    showModal: PropTypes.boolean
};

export default Navigation;
