import React, { Component } from 'react';

import './Beer.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, Badge, Row
} from 'reactstrap';
import { Animated } from "react-animated-css";

import Details from '../Details/Details';

class Beer extends Component {

    constructor(props) {
        super()
        this.state = { ibu: null, abv: null, isOrganic: null }
        this.handleOrganicChange = this.handleOrganicChange.bind(this);
        this.handleAbvChange = this.handleAbvChange.bind(this);
        this.handleIbuChange = this.handleIbuChange.bind(this);
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
        this.refs.beerDetail.toggle(this.props.beer);
    }

    handleOrganicChange(value) {
        this.setState({ ibu: null, abv: null, isOrganic: value }, () => this.props.refreshBeerFilter(this.state));
    }
    handleAbvChange(value) {
        this.setState({ ibu: null, abv: [value, value], isOrganic: null }, () => this.props.refreshBeerFilter(this.state));
    }
    handleIbuChange(value) {
        this.setState({ ibu: [value, value], abv: null, isOrganic: null }, () => this.props.refreshBeerFilter(this.state));
    }

    render() {
        return (
            <Col sm="12" md="6" lg="4" xs="12" className="beer-col">
                <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
                    <Card className="beer-card">
                        <CardBody>
                            {this.renderLabels()}
                            <CardTitle className="text-center">
                                {this.props.beer.name}
                            </CardTitle>
                            {(this.props.beer.style) &&
                                <CardSubtitle className="text-center">
                                    {this.props.beer.style.name}
                                </CardSubtitle>
                            }
                            <hr />
                            <CardSubtitle>
                                <Row className="infos-row" >
                                    {this.props.beer.ibu &&
                                        <Col xs="12" lg="auto">
                                            <Button onClick={this.handleIbuChange.bind(null, this.props.beer.ibu)} color="dark" outline>
                                                IBU: <Badge color="light">{this.props.beer.ibu}</Badge>
                                            </Button>
                                        </Col>
                                    }
                                    {this.props.beer.abv &&
                                        <Col xs="12" lg="auto">
                                            <Button onClick={this.handleAbvChange.bind(null, this.props.beer.abv)} color="dark" outline>
                                                ABV: <Badge color="light">{this.props.beer.abv}</Badge>
                                            </Button>
                                        </Col>
                                    }
                                    {this.props.beer.isOrganic &&
                                        <Col xs="12" lg="auto">
                                            <Button onClick={this.handleOrganicChange.bind(null, this.props.beer.isOrganic)} color="dark" outline>
                                                {this.props.beer.isOrganic === "Y" ? 'Organic Beer' : ''}
                                                {this.props.beer.isOrganic === "N" ? 'Non-Organic Beer' : ''}
                                            </Button>
                                        </Col>
                                    }
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
                </Animated>
            </Col>
        )
    }
}

export default Beer;