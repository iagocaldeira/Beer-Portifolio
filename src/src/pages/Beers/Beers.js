import React, { Component } from 'react';

import API from '../../guidelines/api.instance';
import config from '../../guidelines/base.config';
import Beer from './Beer/Beer';
import './Beers.css';
import { CardDeck, Row, Col } from 'reactstrap';
import { Animated } from "react-animated-css";

import Filter from '../Shared/Filter/Filter';
import Order from '../Shared/Order/Order';
import Header from '../Shared/Header/Header';
import Pages from '../Shared/Pages/Pages';


class Beers extends Component {

    state = {}

    constructor() {
        super()
        this.state = {
            beers: [],
            beerFilter: {
                name: null,
                ibu: null,
                abv: null,
                isOrganic: null,
                styleId: null,
                order: "",
                sort: "",
                p: null
            },
            currentPage: 1,
            numberOfPages: 0,
            loading: true
        }

    }

    getList = (filter) => {
        let p = {};
        p.name = (filter.name) ? filter.name : null;
        p.ibu = (filter.ibu) ? `${Math.floor(filter.ibu[0], 10)},${Math.ceil(filter.ibu[1], 10) - 0.1}` : "+0";
        p.abv = (filter.abv) ? `${Math.floor(filter.abv[0], 10)},${Math.ceil(filter.abv[1], 10) - 0.1}` : "+0";
        p.isOrganic = (filter.isOrganic) ? filter.isOrganic : null;
        p.p = (filter.p) ? filter.p : null;
        p.styleId = (filter.styleId) ? filter.styleId : null;
        p.order = (filter.order) ? filter.order : null;
        p.sort = (filter.sort) ? filter.sort : null;
        

        API.get(`beers?&key=${config.key}`, {
            params: p
        })
            .then((response) => {
                this.setState({
                    beerFilter: filter,
                    beers: (response.data.data) ? response.data.data : [],
                    currentPage: response.data.currentPage,
                    numberOfPages: response.data.numberOfPages,
                });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    componentWillMount() {
        if (this.props.history && this.props.history.location.search) {
            this.setState(
                {
                    beerFilter: {
                        styleId: this.props.history.location.search.split('=')[1]
                    }
                },
                () => this.getList(this.state.beerFilter)
            );
            
        }else{
           
            this.getList(this.state.beerFilter);
        }

    }

    render() {
        return (
            <div>
                <Header />
                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                    <div className="app-container">
                        <Row className="justify-content-between">
                            <Col >
                                <Order refreshOrder={this.getList} />
                                <Filter refreshFilters={this.getList} />
                            </Col>
                        </Row>
                        <Row>
                            <CardDeck className="beer-card-deck">
                                {this.state.beers.map((object, i) => {
                                    return <Beer refreshBeerFilter={this.getList} beer={object} key={i} />;
                                })}
                            </CardDeck>
                        </Row>
                    </div>
                    <Row className="pagination justify-content-between">
                        <Col >
                            <Pages numberOfPages={this.state.numberOfPages} currentPage={this.state.currentPage} changePage={this.getList} />
                        </Col>
                    </Row>
                </Animated>
            </div>
        )
    }
}

export default Beers;