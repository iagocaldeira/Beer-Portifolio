import React, { Component } from 'react';

import './Beer.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Badge, Row
} from 'reactstrap';
import Details from '../Details/Details';

class Beer extends Component {

    constructor(props) {
        super()
    }

    renderLabels() {
        let labelSource = "http://via.placeholder.com/300x300?text=No%20label%20found";
        if (this.props.beer.labels) {
            if (this.props.beer.labels.large) {
                labelSource = this.props.beer.labels.large;
            } else if (this.props.beer.labels.medium) {
                labelSource = this.props.beer.labels.medium;
            } else if (this.props.beer.labels.icon) {
                labelSource = this.props.beer.labels.icon;
            }
        }
        return (
            <div className="beer-label-container">
            <CardImg className="beer-label" src={labelSource} alt="Beer Label" />
            </div>
        )
    }

    seeDetails = (event) => {
        event.preventDefault();
        event.stopPropagation();

        console.log(this.refs.beerDetail.toggle(this.props.beer));
    }

    render() {
        return (
            <Col md="4" xs="12">
                <Card className="beer-card">
                    <CardBody>
                        { this.renderLabels() }
                        <CardTitle className="text-center">
                            {this.props.beer.name}
                        </CardTitle>
                        <hr />
                        <CardSubtitle>
                            <Row className="infos-row" >
                                <Col xs="12" lg="auto">
                                    <Button color="dark" outline>
                                        IBU: <Badge color="light">{this.props.beer.ibu}</Badge>
                                    </Button>
                                </Col>
                                <Col xs="12" lg="auto">
                                    <Button color="dark" outline>
                                        ABV: <Badge color="light">{this.props.beer.abv}</Badge>
                                    </Button>
                                </Col>
                                <Col xs="12" lg="auto">
                                    <Button color="dark" outline>
                                        {this.props.beer.isOrganic ? 'Organic Beer' : 'Non-Organic Beer'}
                                    </Button>
                                </Col>
                            </Row>
                        </CardSubtitle>
                        <hr />
                        <CardText className="multiline-ellipsis">
                            {this.props.beer.description}
                        </CardText>
                        <Row className="bottom-row">
                            <Col md={{ size: 3, offset: 1 }}>
                                <Button onClick={this.seeDetails}>
                                    Details
                                </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Details ref="beerDetail" />
            </Col>
        )
    }
}

export default Beer;