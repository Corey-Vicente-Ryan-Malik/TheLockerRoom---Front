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
                                // for(const [key, value] of Object.entries(allDataFour)) {
                                //     console.log(`${key}: ${value}`);
                                // } 
                            }
                        }
                    }
                }

                // console.log(allDataThree);


                // const allDataObject = response.data;
                // console.log(allDataObject)

                // const allDataArray = Object.values(response.data);
                // console.log(allDataArray)
                

                
                // allDataArray.forEach((data) => {
                //     console.log(data)
                //     const newData = data
                //     console.log(newData)
                // })

                // let allGames;
                // for(const property in allData) {
                //     allGames = allData[property].games;
                // }
                // console.log(allGames);

                // let newAllGames;
                // for(const property in allGames) {
                //     newAllGames = allGames[property].competitions
                // }
                // console.log(newAllGames);




                





                //for...in loop used - No Success
                // for(const key in allData) {
                //     console.log(`${key}: ${allData[key]}`)
                // }

                //Object.keys method used to iterate through objects - No Success
                // const dates = Object.keys(allData);
                // console.log(dates)

                // dates.forEach((key, index) => {
                //     console.log(`${key}: ${dates[key]}`)
                // })

                //Object.entries method used to iterate through objects - No Success
                // const one = Object.entries(allData);
                // console.log(one);





                // getGames(allData)
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return(
        <GameSched games = {games}/>
    )

}