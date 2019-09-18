import React, { Component } from 'react';
import axios from 'axios';

class Players extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        axios.get('https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=34145399')
        .then(res => {
            // console.log(res.data.players)
            this.setState({
                players: res.data.players
            })
        })
    }

    render() {
        
        return (
            <div>
                <h1>players</h1>
            </div>
        )
    }
}

export default Players;