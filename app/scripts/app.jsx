import React from 'react';

import Navigation from './components/navigation.jsx';
import DynamicHeader from './components/dynamic_header.jsx';
import MainContent from './components/main_content.jsx';
import Modal from 'react-bootstrap/lib/Modal';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalContent: []
        };
    }

    openModal(content = []) {
        this.setState({
            showModal: true,
            modalContent: content
        });
    }

    closeModal() {
        this.setState({
            showModal: false,
            modalContent: []
        });
    }

    render() {
        var { showModal, modalContent } = this.state;

        return (
            <div id='page'>
                <Navigation showModal={this.openModal.bind(this)} hideModal={this.closeModal.bind(this)}/>
                <DynamicHeader/>
                <MainContent/>
                <Modal id='mbu-modal' show={showModal} onHide={this.closeModal.bind(this)}>
                    {modalContent}
                </Modal>
            </div>
        );
    }
}

export default App;
