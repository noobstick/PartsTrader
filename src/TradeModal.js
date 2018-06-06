import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class TradeModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        });
    }

    render(){
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal centered={true} size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Trade Offer</ModalHeader>
                    <ModalBody>
                        Select Items to Trade
                        <ul>
                            <li><input type="checkbox"/>Your Item</li>
                            <li><input type="checkbox"/>Your Item</li>
                            <li><input type="checkbox"/>Your Item</li>
                            <li><input type="checkbox"/>Your Item</li>
                            <li><input type="checkbox"/>Your Item</li>
                        </ul>
                        Amount Offer 
                        <input type="textbox" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Offer Trade</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}