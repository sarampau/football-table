import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css';

function Home() {

    const [table, setTable] = useState([]);
    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {
        // const fetchData = async () => {
        //     const leageTable = await axios.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920');
        //     const leagueFixtures = await axios.get('https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1920');
        //     setLeagueData({table: leagueTable.data, fixtures: leageFixtures.data});
        // };
        // fetchData();
        axios.get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920')
            .then((r) =>
                setTable(r.data.table.sort((a, b) => (a.total < b.total) ? 1 : (a.total === b.total) ? ((a.goalsdifference < b.goalsdifference) ? 1 : -1) : -1 ))
            )
            .catch(err => {
                console.log(err.message);
            });
        axios.get('https://www.thesportsdb.com/api/v1/json/1/eventsseason.php?id=4328&s=1920')
            .then ((res) => 
                setFixtures(res.data.events)
            )
            .catch(err => {
                console.log(err.message);
            });
        }, []);
console.log(fixtures)

return (
        <div className='home-container'>
            <table className='table-container'>
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
                            table.map((team) => {
                                return (
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
            <div className='fixtures-container'>
                {
                    fixtures.map((event) => {
                        return (
                            <div>
                                <p>{event.strHomeTeam} {event.intHomeScore}</p>
                                <p>{event.strAwayTeam} {event.intAwayScore}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;
