import React, { Component } from 'react';

import API from '../../guidelines/api.instance';
import config from '../../guidelines/base.config';
import Beer from './Beer/Beer';
import './Beers.css';
import { CardDeck, Row, Col } from 'reactstrap';
import Filter from '../Shared/Filter/Filter';
import Order from '../Shared/Order/Order';
import Header from '../Shared/Header/Header';

class Beers extends Component {

    state = {}

    constructor() {
        super()
        this.state = {
            beers: [],
            beerFilter: {
                name: "",
                ibu: "+0",
                abv: "+0",
                isOrganic: "N",
                order: "",
                sort: ""
            },
            pageSelected: 1,
            pageTotal: 0,
            loading: true
        }
    }

    getList = (filter) => {
        const self = this;
        let p = {};
        p.name = (filter.name) ? filter.name : null;
        p.ibu = (filter.ibu) ? `${filter.ibu[0]},${filter.ibu[1]}` : "+0";
        p.abv = (filter.abv) ? `${filter.abv[0]},${filter.abv[1]}` : "+0";
        p.isOrganic = (filter.isOrganic) ? filter.isOrganic : null;
        p.order = (filter.order) ? filter.order : null;
        p.sort = (filter.sort) ? filter.sort : null;
        console.log(filter);


        API.get(`beers?&key=${config.key}`, {
            params: p
        })
            .then(function (response) {
                self.setState({
                    beerFilter: filter,
                    beers: (response.data.data) ? response.data.data : [],
                    pageSelected: response.data.currentPage,
                    pageTotal: response.data.numberOfPages,
                    totalResults: response.data.totalResults,
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    componentWillMount() {
        this.getList({ name: "", ibu: "+0", abv: "+0", isOrganic: "N" });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app-container">
                    <Row className="justify-content-between">
                        <Col xs="4">
                            <Filter refreshFilters={this.getList} />
                        </Col>
                        <Col xs="4">
                            <Order refreshOrder={this.getList} />
                        </Col>
                    </Row>
                    <Row>
                        <CardDeck className="beer-card-deck">
                            {this.state.beers.map(function (object, i) {
                                return <Beer beer={object} key={i} />;
                            })}
                        </CardDeck>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Beers;