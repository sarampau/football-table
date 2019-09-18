import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Teams from './components/Teams';
import Players from './components/Players';

class App extends Component {

    render() {
        return (
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/teams' component={Teams} />
                <Route path='/players' component={Players} />
            </Router>
        )
    }
}

export default App;
