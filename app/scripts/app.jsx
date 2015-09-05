import React from 'react';

import Navigation from './components/navigation.jsx';
import DynamicHeader from './components/dynamic_header.jsx';
import MainContent from './components/main_content.jsx';
import Modal from 'react-bootstrap/lib/Modal';

var App = React.createClass({
    getInitialState() {
        return {
            showModal: false,
            modalContent: []
        };
    },

    openModal(content = []) {
        this.setState({
            showModal: true,
            modalContent: content
        });
    },

    closeModal() {
        this.setState({
            showModal: false,
            modalContent: []
        });
    },

    render() {
        var { showModal, modalContent } = this.state;

        return (
            <div id='page'>
                <Navigation showModal={this.openModal} hideModal={this.closeModal}/>
                <DynamicHeader/>
                <MainContent/>

                <Modal id='mbu-modal' show={showModal} onHide={this.closeModal}>
                    {modalContent}
                </Modal>
            </div>
        );
    }
});

export default App;
