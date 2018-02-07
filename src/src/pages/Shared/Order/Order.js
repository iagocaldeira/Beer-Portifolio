import React, { Component } from 'react';

import './Order.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

const Slider = require('rc-slider');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Order extends Component {

    constructor(props) {
        super();
        this.state = { order: "", sort: "", dropdownOpen: false }
        this.handleDropdownChange = this.handleDropdownChange.bind(this);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleDropdownChange(event) {

        console.log(event);
        
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            order: event.target.order,
            sort: event.target.sort
        });
    }

    search = () => {
        this.props.atualizar(this.state);
    }

    render() {
        return (
            <div id="beer-order">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Sort By {this.state.order} {!this.state.sort?"":this.state.sort === "desc" ? "Descending" :"Ascending" }
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={this.handleDropdownChange} order={""} sort={""} >Default</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownChange} order={"ibu"} sort={"desc"} >IBU (High > Low)</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownChange} order={"ibu"} sort={"asc"} >IBU (Low > High)</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownChange} order={"abv"} sort={"desc"} >ABV (High > Low)</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownChange} order={"abv"} sort={"asc"} >ABV (Low > High)</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default Order;