import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './rootStore';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Players from './pages/Players';

const routing = (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/teams' component={Teams} />
                <Route path='/players' component={Players} />
            </div>
        </Router>
    </Provider> 
)

render(routing, document.getElementById("app"));
