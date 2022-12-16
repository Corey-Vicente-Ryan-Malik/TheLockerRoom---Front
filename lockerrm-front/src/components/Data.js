import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import WeeklySchedule from "./WeeklySchedule";

export default function Data() {

    const scheduleUrl = 'https://nfl-api1.p.rapidapi.com/nflschedule?year=2023&month=03&day=31';

    const teamUrl = 'https://nfl-api1.p.rapidapi.com/nflteamlist';

    const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
                    'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com'
                }
            };

    const [homeDisplay, getHomeDisplay] = useState([]);
    const [awayDisplay, getawayDisplay] = useState([]);
    const [gameNameDisplay, getGameNameDisplay] = useState([]);
    const [dateDisplay, getDateDisplay] = useState([]);
    const [logoDisplay, getLogoDisplay] = useState([]);

    useEffect(() => {
        homeTeam()
        awayTeam()
        gameName()
        gameDate()
        teamLogo()
        // teamCall()
        // teamWins()
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
                getHomeDisplay(homeArr);
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
                getawayDisplay(awayArr);
            })
            .catch(error => console.error(`Error: ${error}`));
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
                getGameNameDisplay(gameArr);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    function gameDate() {
        axios.get(scheduleUrl, options)
            .then((response) => {
                const allData = response.data;

                let dateArr = [];
                let allDataOne;
                let allDataTwo;
                let allDataThree;
                for(let property in allData) {
                    allDataOne = allData[property].games;

                    for(let property in allDataOne) {
                        allDataTwo = allDataOne[property].status;

                        allDataThree = allDataTwo.type.detail;

                        dateArr.push(allDataThree);
                    }
                }
                getDateDisplay(dateArr);
            })
            .catch(error => console.error(`Error: ${error}`));
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
                getLogoDisplay(logoArr);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    function teamCall() {
        axios.get(teamUrl, options)
            .then((response) => {
                const allData = response.data;

                let teamArr = [];
                let allDataOne;
                let allDataTwo;
                let allDataThree;
                let allDataFour;

                allDataOne = allData.sports;

                for(let property in allDataOne) {
                    allDataTwo = allDataOne[property].leagues;

                    for(let property in allDataTwo) {
                        allDataThree = allDataTwo[property].teams;

                        for(let property in allDataThree) {
                            allDataFour = allDataThree[property].team.displayName;

                            teamArr.push(allDataFour);
                        }
                    }
                }
                console.log(teamArr);  
                return teamArr;      
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    function teamWins() {
        for(let i = 1; i <= 33; i++) {
            let teamId = i;
            let teamInfo = `https://nfl-api1.p.rapidapi.com/nflteaminfo?teamid=${teamId}`;

            axios.get(teamInfo, options)
                .then((response) => {
                    const allData = response.data;

                    let nameData;
                    let standingData;

                    if(allData.team.displayName === 'Afc' || allData.team.displayName === 'Nfc') { 
                    } else {
                        nameData = allData.team.displayName;
                        standingData = allData.team.standingSummary;

                        console.log(`${nameData} is ${standingData}`);
                    }
                            
                })
                .catch(error => console.error(`Error: ${error}`));
        }
    }
    

    return (
        <div>
            <div>
                <WeeklySchedule 
                    homeDisplay={homeDisplay} 
                    awayDisplay={awayDisplay} 
                    gameNameDisplay={gameNameDisplay}
                    dateDisplay={dateDisplay} 
                    logoDisplay={logoDisplay}
                />
            </div>
        </div>
        
                       
        
    )

}