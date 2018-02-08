import React, { Component } from 'react';

import './Style.css';
import {
    Card, CardText, CardBody,
    CardTitle, Button, Col, Row
} from 'reactstrap';
import Details from '../Details/Details';
import NavLink from 'react-router-dom/NavLink';

class Style extends Component {

    constructor(props) {
        super(props)
        this.seeDetails = this.seeDetails.bind(this);
    }

    seeDetails = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.refs.styleDetail.toggle(this.props.style);
    }

    seeBeers = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.history.push({
            pathname: '/beers',
            search: `?styleId=${this.props.style.id}`,
        });
    }

    render() {
        return (
            <Col sm="12" md={{ size: "8", offset: "2" }} lg={{ size: "4", offset: "0" }} xs="12" className="style-col">
                <Card className="style-card">
                    <CardBody>
                        <CardTitle className="text-center">
                            {this.props.style.name}
                        </CardTitle>
                        <hr />
                        <CardText>
                            {this.props.style.description}
                        </CardText>
                        <Row className="bottom-row">
                            <Col md={{ size: 3, offset: 2 }}>
                                <Button onClick={this.seeDetails}>
                                    Details
                                </Button>
                            </Col>
                            <Col md={{ size: 3, offset: 2 }}>
                                <Button onClick={this.seeBeers}>
                                    Find Beers
                                </Button>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Details ref="styleDetail" style={this.props.style} />
            </Col>
        )
    }
}

export default Style;