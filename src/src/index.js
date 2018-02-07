import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';

import Beers from './pages/Beers/Beers'
import './index.css'

const routeHistory = createHistory()

// API.defineRequestInterceptor(localStorage);
// API.defineResponseInterceptor(routeHistory);

ReactDOM.render((
    <Router history={routeHistory}>
        <Switch>
            <Route path="/beers" component={Beers} />
            {/* <Route path="/styles" component={Styles} /> */}
            <Route path="/" component={Beers} />
        </Switch>
    </Router>
), document.getElementById('root'));

registerServiceWorker();

/**
 *  https://api.brewerydb.com/v2/beers?abv=+0&key=2d3a551435b717a7d570966dd86a290d&format=json
 *  https://api.brewerydb.com/v2/beersapi/v1/beers?abv=+0&key=2d3a551435b717a7d570966dd86a290d
 * 
 */