import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css';

function Home() {

    const [season, setSeason] = useState([]);
    const [position, setPosition] = useState(1);

    useEffect(() => {
        axios.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920')
        .then((r) =>
        setSeason(r.data.table.sort((a, b) => (a.total < b.total) ? 1 : (a.total === b.total) ? ((a.goalsdifference < b.goalsdifference) ? 1 : -1) : -1 ))
    )
},[])

    console.log(season)
return (
        <div>
            <h1>Futbolero</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Team</th>
                        <th>Played</th>
                        <th>Won</th>
                        <th>Draw</th>
                        <th>Lost</th>
                        <th>For</th>
                        <th>Against</th>
                        <th>+/-</th>
                        <th>Points</th>
                    </tr>
                    
                        {
                            season.map((team) => {
                                return(
                                    <tr key={team.teamid}>
                                        <td>{team.name}</td>
                                        <td>{team.played}</td>
                                        <td>{team.win}</td>
                                        <td>{team.draw}</td>
                                        <td>{team.loss}</td>
                                        <td>{team.goalsfor}</td>
                                        <td>{team.goalsagainst}</td>
                                        <td style={{float: 'right'}}>{team.goalsdifference}</td>
                                        <td>{team.total}</td>
                                    </tr>
                                )
                            })
                        }
                    
                </tbody>
            </table>
        </div>
    )
}

export default Home;
