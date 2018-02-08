import React, { Component } from 'react';

import './Order.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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

    handleDropdownChange(order, sort, event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            order: order,
            sort: sort
        },()=>this.props.refreshOrder(this.state));

    }

    render() {
        return (
            <div id="beer-order">
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Sort by {this.state.order} {!this.state.sort?"":this.state.sort === "desc" ? "descending" :"ascending" }
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem onClick={this.handleDropdownChange.bind(null, "", "")}  >Default</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownChange.bind(null, "ibu", "desc")}  >IBU (High > Low)</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownChange.bind(null, "ibu", "asc")}  >IBU (Low > High)</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownChange.bind(null, "abv", "desc")}  >ABV (High > Low)</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownChange.bind(null, "abv", "asc")}  >ABV (Low > High)</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

export default Order;