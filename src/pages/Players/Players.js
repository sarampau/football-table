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
        // console.log(this.state.players);
        
        return (
            <div>
                {this.state.players.map(player => {
                    console.log(player.strPlayer);
                    return <h1 key={player.idPlayer}>{player.strPlayer}</h1>
                })}
            </div>
        )
    }
}

export default Players;