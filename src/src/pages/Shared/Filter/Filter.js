import React, { Component } from 'react';

import './Filter.css';
import {
    Button, Col, Input, FormGroup, Label, Collapse, Card, CardBody, Row
} from 'reactstrap';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Filter extends Component {

    constructor(props) {
        super();
        this.state = { name: "", ibu: [1, 1000], abv: [0, 308], isOrganic: "N", collapse: false }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAbvChange = this.handleAbvChange.bind(this);
        this.handleIbuChange = this.handleIbuChange.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value }, () => { });
    }
    handleAbvChange(value) {
        this.setState({ abv: value }, () => { });
    }
    handleIbuChange(value) {
        this.setState({ ibu: value }, () => { });
    }

    search = () => {
        this.props.refreshFilters(this.state);
    }

    render() {
        return (
            <div id="beer-filter">
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Filter</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Row >
                        <Col xs="4">
                            <Card>
                                <CardBody>
                                    <FormGroup row>
                                        <Label for="name" sm="3">Name</Label>
                                        <Col sm="9">
                                            <Input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="abv" sm="3">ABV</Label>
                                        <Col sm="9">
                                            <Range defaultValue={[0, 308]} name="abv" value={this.state.abv} onChange={this.handleAbvChange} min={0} max={308} />
                                            {/* <Input type="text" name="abv" value={this.state.abv} onChange={this.handleInputChange} /> */}
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="ibu" sm="3">IBU</Label>
                                        <Col sm="9">
                                            <Range defaultValue={[1, 1000]} name="ibu" value={this.state.ibu} onChange={this.handleIbuChange} min={1} max={1000} />
                                            {/* <Input type="text" name="ibu" value={this.state.ibu} onChange={this.handleInputChange} /> */}
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="isOrganic" sm="3">IsOrganic</Label>
                                        <Col sm="9">
                                            <Input type="text" name="isOrganic" value={this.state.isOrganic} onChange={this.handleInputChange} />
                                        </Col>
                                    </FormGroup>
                                    <Button onClick={this.search}>
                                        Search
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Collapse>
            </div>
        );
    }
}

export default Filter;