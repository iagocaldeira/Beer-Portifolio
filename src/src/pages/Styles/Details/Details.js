import React, { Component } from 'react';

import './Details.css';
import {
    Modal, ModalHeader, ModalBody, ModalFooter, CardSubtitle, Button, Col, Badge, Row
} from 'reactstrap';

class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.style.nameDisplay}</ModalHeader>
                    <ModalBody>
                        <CardSubtitle>
                            <Row className="ibu-row justify-content-around" >
                                <Col xs="6" lg="auto">
                                    <Button className="btn-block" color="dark" outline>
                                        Min IBU: <Badge color="light">{this.props.style.ibuMin}</Badge>
                                    </Button>
                                </Col>
                                <Col xs="6" lg="auto">
                                    <Button className="btn-block" color="dark" outline>
                                        Max IBU: <Badge color="light">{this.props.style.ibuMax}</Badge>
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="ibu-row justify-content-around" >
                                <Col xs="6" lg="auto">
                                    <Button className="btn-block" color="dark" outline>
                                        Min ABV: <Badge color="light">{this.props.style.abvMin}</Badge>
                                    </Button>
                                </Col>
                                <Col xs="6" lg="auto">
                                    <Button className="btn-block" color="dark" outline>
                                        Max ABV: <Badge color="light">{this.props.style.abvMax}</Badge>
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="ibu-row justify-content-around" >
                                <Col xs="6" lg="auto">
                                    <Button className="btn-block" color="dark" outline>
                                        Min SRM: <Badge color="light">{this.props.style.srmMin}</Badge>
                                    </Button>
                                </Col>
                                <Col xs="6" lg="auto">
                                    <Button className="btn-block" color="dark" outline>
                                        Max SRM: <Badge color="light">{this.props.style.srmMax}</Badge>
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="ibu-row justify-content-around" >
                                <Col xs="6" lg="auto">
                                    <Button className="btn-block" color="dark" outline>
                                        Min Original Gravity: <Badge color="light">{this.props.style.ogMin}</Badge>
                                    </Button>
                                </Col>
                                <Col xs="6" lg="auto">
                                    <Button className="btn-block" color="dark" outline>
                                        Max Original Gravity: <Badge color="light">{this.props.style.ogMax}</Badge>
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="ibu-row justify-content-around" >
                                <Col xs="6" lg="auto">
                                    <Button className="btn-block" color="dark" outline>
                                        Min Final Gravity: <Badge color="light">{this.props.style.fgMin}</Badge>
                                    </Button>
                                </Col>
                                <Col xs="6" lg="auto">
                                    <Button className="btn-block" color="dark" outline>
                                        Max Final Gravity: <Badge color="light">{this.props.style.fgMax}</Badge>
                                    </Button>
                                </Col>
                            </Row>
                        </CardSubtitle>
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

