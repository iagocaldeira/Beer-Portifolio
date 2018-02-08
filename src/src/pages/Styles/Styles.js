import React, { Component } from 'react';

import API from '../../guidelines/api.instance';
import config from '../../guidelines/base.config';
import Style from './Style/Style';
import './Styles.css';
import { CardDeck, Row } from 'reactstrap';
import Header from '../Shared/Header/Header';

class Styles extends Component {

    state = {}

    constructor() {
        super()
        this.state = {
            styles: [],
            loading: true
        }
    }

    getList = () => {
        API.get(`styles?&key=${config.key}`, {})
            .then((response) => {
                this.setState({
                    styles: (response.data.data) ? response.data.data : []
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentWillMount() {
        this.getList();
    }

    render() {
        return (
            <div>
                <Header />
                <div className="app-container">
                    <Row>
                        <CardDeck className="style-card-deck">
                            {this.state.styles.map((object, i) => {
                                return <Style refreshStyleFilter={this.getList} history={this.props.history} style={object} key={i} />;
                            })}
                        </CardDeck>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Styles;