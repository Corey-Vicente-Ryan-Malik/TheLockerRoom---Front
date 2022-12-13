import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';

export default function Data() {

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
        homeTeam()
    }, []);

    function homeTeam () {
        axios.get(url, options)
            .then((response) => {
                const allData = response.data;
                console.log(allData);
                
                let allDataOne = [""];
                let newArr = [];
                let homeArr = [];
                let awayArr = [];
                let allDataTwo;
                let allDataThree;
                let allDataFour;
                let allDataFive;
                for(let property in allData) {
                    allDataOne = allData[property].games;
                    
                    for(let property in allDataOne) {
                        allDataTwo = allDataOne[property].competitions;

                        for(let property in allDataTwo) {
                            allDataThree = allDataTwo[property].competitors;

                            for(let property in allDataThree) {
                                allDataFour = allDataThree[property].homeAway;
                                allDataFive = allDataThree[property].team.displayName;

                                if(allDataFour === 'home') {
                                    homeArr.push(allDataFive);
                                } else {
                                    awayArr.push(allDataFive);
                                }
                            }
                        }
                    }
                }
                    console.log(homeArr);
                    console.log(awayArr);

                // getGames(allData)
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return (
        console.log()        

    )

}