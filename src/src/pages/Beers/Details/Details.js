import React, { Component } from 'react';

import './Details.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            beer: {}
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(fullBeer) {
        this.setState({
            modal: !this.state.modal,
            beer: fullBeer
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.beer.nameDisplay}</ModalHeader>
                    <ModalBody>
                        {this.state.beer.description}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Go back</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}

export default Details;

