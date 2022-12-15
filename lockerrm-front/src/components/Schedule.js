import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GameSched from './GameSched';

export default function Schedule() {

    const [games, getGames] = useState('');

    const url = 'https://nfl-api1.p.rapidapi.com/nflschedule?year=2023&month=03&day=01'

    const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
                    'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com'
                }
            };

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get(url, options)
            .then((response) => {
                const allData = response.data;
                console.log(allData);

                let allDataOne;
                let allDataTwo;
                let allDataThree;
                let allDataFour;
                for(let property in allData) {
                    allDataOne = allData[property].games;
                    
                    for(let property in allDataOne) {
                        allDataTwo = allDataOne[property].competitions;

                        for(let property in allDataTwo) {
                            allDataThree = allDataTwo[property].competitors;

                            for(let property in allDataThree) {
                                allDataFour = allDataThree[property].team.displayName;
                                console.log('displayName: ' + allDataFour)
                            }
                        }
                    }
                }

                
                // getGames(allData)
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return(
        <GameSched games = {games}/>
    )

}

// export default Schedule;