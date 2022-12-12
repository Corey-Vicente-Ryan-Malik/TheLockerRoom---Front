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
                console.log(allData)

                //Object.keys method used to iterate through objects
                const dates = Object.keys(allData);
                console.log(dates)

                dates.forEach((key, index) => {
                    console.log(`${key}: ${dates[key]}`)
                })

                //Object.entries method used to iterate through objects
                // const one = Object.entries(allData);
                // console.log(one);





                getGames(allData)
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return(
        <GameSched games = {games}/>
    )

}