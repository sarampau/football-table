import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

function Home() {

    const [season, setSeason] = useState([]);
    const [position, setPosition] = useState(1);

    useEffect(() => {
        axios.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920')
        .then((r) =>
        setSeason(r.data.table.sort((a, b) => (a.total < b.total) ? 1 : (a.total === b.total) ? ((b.goalsdifference < a.goalsdifference) ? 1 : -1) : -1 ))
    )
},[])

    // console.log(season)
return (
        <div>
            <h1>home</h1>
            <table>
                <tbody>
                    <tr>
                        <th>premier league</th>
                    </tr>
                    
                        {
                            season.map((team) => {
                                return(
                                    <tr key={team.teamid}>
                                        <td>{setPosition(position + 1)}</td>
                                        <td>{team.name}</td>
                                        <td>{team.goalsdifference}</td>
                                        {/* <td>{team.played}</td>
                                        <td>{team.win}</td>
                                        <td>{team.draw}</td>
                                        <td>{team.loss}</td> */}
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
