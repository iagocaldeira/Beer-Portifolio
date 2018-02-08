import React, { Component } from 'react';

import './Pages.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Pages extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: props.currentPage,
            numberOfPages: props.numberOfPages,
        };
        this.changePage = this.changePage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ currentPage: nextProps.currentPage, numberOfPages: nextProps.numberOfPages });
    }

    changePage(page, aux) {
        aux.preventDefault();
        aux.stopPropagation();
        this.setState({ currentPage: page });
        this.props.changePage({ p: page });
    }

    pagesNumber(total, activePage, changePageEvent) {
        var result = [];

        const firstPage = currentPage => (currentPage - 3) < 1 ? 1 : (currentPage - 3);

        for (let currentPage = firstPage(currentPage); currentPage <= (currentPage+3); currentPage++) {
            result.push(
                <PaginationItem key={currentPage} active={(currentPage === activePage?true:undefined)} >
                    <PaginationLink onClick={changePageEvent.bind(this, currentPage)}> {currentPage} </PaginationLink>
                </PaginationItem>
                );
        }
        result.push(<PaginationItem disabled key={null} ><PaginationLink >...</PaginationLink></PaginationItem>);
        result.push(
            <PaginationItem key={total} >
                <PaginationLink active={(this.state.currentPage === total ? true : undefined)}  onClick={changePageEvent.bind(this, total)}> {total} </PaginationLink>
            </PaginationItem>
        );

        return result;
    }

    render() {
        return (
            <Pagination size="lg">
                <PaginationItem disabled={this.state.currentPage === 1}>
                    <PaginationLink previous  />
                </PaginationItem>
                {this.pagesNumber(this.state.numberOfPages, this.state.currentPage, this.changePage)}
                <PaginationItem disabled={this.state.currentPage === this.state.numberOfPages}>
                    <PaginationLink next  />
                </PaginationItem>
            </Pagination>
        )
    }
}

export default Pages;