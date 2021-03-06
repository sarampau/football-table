import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Teams from './components/Teams';
import Players from './components/Players';
import './styles/App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <h1>Futbolero</h1>
                <Route exact path='/' component={Home} />
                <Route path='/teams' component={Teams} />
                <Route path='/players' component={Players} />
            </Router>
        )
    }
}

export default App;
