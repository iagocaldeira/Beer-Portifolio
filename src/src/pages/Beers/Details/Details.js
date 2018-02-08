import React, { Component } from 'react';

import './Details.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroupItem, ListGroup, CardImg } from 'reactstrap';

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

    renderProps(beer) {
        if (beer.body && beer.title)
            return (
                <ListGroupItem>
                    <h3>
                        {beer.title}
                    </h3>
                    {beer.body}
                </ListGroupItem>
            )
    }

    renderLabels(beer) {
        let labelSource = "";
        if (beer.labels) {
            if (beer.labels.large) {
                labelSource = beer.labels.large;
            } else if (beer.labels.medium) {
                labelSource = beer.labels.medium;
            } else if (beer.labels.icon) {
                labelSource = beer.labels.icon;
            }
            return (
                <div className="beer-label-container">
                    <CardImg className="beer-label" src={labelSource} alt="Beer Label" />
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.beer.nameDisplay}</ModalHeader>
                    <ModalBody>
                        {this.renderLabels(this.state.beer)}
                        <ListGroup>
                            {this.renderProps({ title: "Description", body: this.state.beer.description })}
                            {this.renderProps({ title: "Food Pairings", body: this.state.beer.foodPairings })}
                            
                            {this.renderProps({ title: "Gravity of the beer", body: this.state.beer.originalGravity })}
                            {this.renderProps({ title: "ABV", body: this.state.beer.abv })}
                            {this.renderProps({ title: "IBU", body: this.state.beer.ibu })}
                            {this.state.beer.glass && this.renderProps({ title: "Glass", body: this.state.beer.glass.name })}
                            {this.state.beer.style && this.renderProps({ title: "Style", body: this.state.beer.style.name })}
                            {this.renderProps({ title: "Organic", body: (this.state.beer.isOrganic === "Y" ? 'Organic Beer' : '') })}
                            {this.renderProps({ title: "Serving Temperature", body: this.state.beer.servingTemperatureDisplay + this.state.beer.servingTemperature })}

                        </ListGroup>
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

