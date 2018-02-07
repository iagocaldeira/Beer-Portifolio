import React, { Component } from 'react';

import API from '../../guidelines/api.instance';
import config from '../../guidelines/base.config';
import Beer from './Beer/Beer';
import './Beers.css';
import { CardDeck } from 'reactstrap';
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
                isOrganic: "N"
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
        console.log(filter);
        console.log(p);
        

        API.get(`beers?&order=abv&sort=asc&key=${config.key}`, {
            params: p
        })
            .then(function (response) {
                self.setState({
                    beerFilter: filter,
                    beers: (response.data.data) ? response.data.data : [],
                    pageSelected: response.data.currentPage,
                    pageTotal: response.data.numberOfPages,
                    totalResults: response.data.totalResults
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
                    <Filter atualizar={this.getList} />
                    <Order atualizar={this.getList} />
                    <CardDeck className="beer-card-deck">
                        {this.state.beers.map(function (object, i) {
                            return <Beer beer={object} key={i} />;
                        })}
                    </CardDeck>
                </div>
            </div>
        )
    }
}

export default Beers;