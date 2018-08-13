import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Dropzone from 'react-dropzone';

export default class TradeCreateModal extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            createModal: false,
            images: []
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    toggleModal()
    {
        this.setState({
            createModal: !this.state.createModal,
            images: []
        });
    }

    onDrop(images)
    {
        this.setState({
            images: this.state.images.length > 0 ? this.state.images.concat(images) : images,
        });
    }

    render()
    {
        return (
            <div>
                <Button color="danger" onClick={this.toggleModal}>New Post</Button>
                <Modal centered={true} size="lg" isOpen={this.state.createModal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Create Post</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Price</Label>
                                <Input type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <Dropzone accept="image/png, image/jpeg" onDrop={this.onDrop}>
                                    <p>Drag and drop or click here to upload images.</p>
                                </Dropzone>
                                <div>
                                    <h1>Uploaded Images</h1>
                                    <div>
                                        {this.state.images.map((file) => <img className="uploaded-img" src={file.preview} />)}
                                    </div>
                                </div>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleModal}>Create Post</Button>{' '}
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}