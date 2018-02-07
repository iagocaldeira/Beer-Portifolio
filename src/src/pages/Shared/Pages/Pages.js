import React, { Component } from 'react';
import { render } from 'react-dom';

import './Pages.css';

class Pages extends Component {

    constructor(props){
        super(props)
        this.state = {
            pageActive: props.pageActive,
            pages: props.pages,
        };
        this.changePage = this.changePage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
          this.setState({ pageActive: nextProps.pageActive, pages: nextProps.pages });
    }

    changePage(page, aux){
        this.props.updatePage(page);
    }

    pagesNumber(total, active, changePageEvent){
        var result = [];

        for(let pageNumber = 1; pageNumber <= total; pageNumber++)
            result.push(<a className={'pages-number ' + ((active == pageNumber) ? 'active' : '')} key={pageNumber} onClick={changePageEvent.bind(this, pageNumber)}>{pageNumber}</a>);
    
        return result;
    }

    render(){
        return (
            <div className="pages">
                <div className="pages-number-container">
                    {this.pagesNumber(this.state.pages, this.state.pageActive, this.changePage)}
                </div>
            </div>
        )
    }
}

export default Pages;