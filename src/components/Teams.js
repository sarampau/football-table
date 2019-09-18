import React, { Component } from 'react';
import axios from 'axios';

class Teams extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => {
            // console.log(res.data.teams);
            this.setState({
                teams: res.data.teams
            })
        })
        // .catch(err => {
        //     console.log('Error: ', err)
        // })
    }

    render() {
        // console.log(this.state.teams);
        return (
            <div>
                <h1>teams</h1>
            </div>
        )
    }
}

export default Teams;
