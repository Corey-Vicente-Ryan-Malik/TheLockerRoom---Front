import { useEffect } from "react";
import React from 'react';
import axios from 'axios';

export default function Data() {

    const scheduleUrl = 'https://nfl-api1.p.rapidapi.com/nflschedule?year=2022&month=12&day=31';

    const teamUrl = 'https://nfl-api1.p.rapidapi.com/nflteamlist';

    const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
                    'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com'
                }
            };

    useEffect(() => {
        homeTeam()
        awayTeam()
        gameName()
        gameDate()
        teamLogo()
        teamCall()
    }, []);

    function homeTeam () {
        axios.get(scheduleUrl, options)
            .then((response) => {
                const allData = response.data;
                
                let homeArr = [];
                let allDataOne;
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
                                }
                            }
                        }
                    }
                }
                console.log(homeArr);
                return homeArr;
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    function awayTeam() {
        axios.get(scheduleUrl, options) 
            .then((response) => {
                const allData = response.data;

                let awayArr = [];
                let allDataOne;
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

                                if(allDataFour === 'away') {
                                    awayArr.push(allDataFive);
                                }
                            }
                        }
                    }
                }
                console.log(awayArr);
                return awayArr;
            })
    }

    function gameName() {
        axios.get(scheduleUrl, options)
            .then((response) => {
                const allData = response.data;

                let gameArr = [];
                let allDataOne;
                let allDataTwo;
                for(let property in allData) {
                    allDataOne = allData[property].games;

                    for(let property in allDataOne) {
                        allDataTwo = allDataOne[property].name;

                        gameArr.push(allDataTwo);
                    }
                }
                console.log(gameArr);
                return gameArr;
            })
    }

    function gameDate() {
        axios.get(scheduleUrl, options)
            .then((response) => {
                const allData = response.data;

                let dateArr = [];
                let allDataOne;
                let allDataTwo;
                for(let property in allData) {
                    allDataOne = allData[property].games;

                    for(let property in allDataOne) {
                        allDataTwo = allDataOne[property].date;

                        dateArr.push(allDataTwo);
                    }
                }
                console.log(dateArr);
                return dateArr;
            })
    }

    function teamLogo() {
        axios.get(scheduleUrl, options)
            .then((response) => {
                let allData = response.data;

                let logoArr = [];
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
                                allDataFour = allDataThree[property].team.logo;

                                logoArr.push(allDataFour);
                            }
                        }
                    }
                }
                console.log(logoArr);
                return logoArr;
            });
    }

    function teamCall() {
        axios.get(teamUrl, options)
            .then((response) => {
                const allData = response.data;
                console.log(allData);

                let teamArr = [];
                let allDataOne;
                let allDataTwo;
                let allDataThree;
                let allDataFour;
                let allDataFive;
                for(let property in allData) {
                    allDataOne = allData[property].sports;
                    console.log(allDataOne);
                    for(let property in allDataOne) {
                        allDataTwo = allDataOne[property].leagues;
                        console.log(allDataTwo);
                        for(let property in allDataTwo) {
                            allDataThree = allDataTwo[property].teams;
                            console.log(allDataThree)
                            for(let property in allDataThree) {
                                allDataFour = allDataThree[property].team.displayName;
                                
                                teamArr.push(allDataFour)
                            }
                        }
                    }
                }
                console.log(teamArr);
            })
    }

    return (
        console.log()        

    )

}