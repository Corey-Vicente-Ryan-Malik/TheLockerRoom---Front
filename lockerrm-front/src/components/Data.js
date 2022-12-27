import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import WeeklySchedule from './WeeklySchedule';

export default function Data() {
  const scheduleUrl =
    'https://nfl-api1.p.rapidapi.com/nflschedule?year=2024&month=03&day=31';

  const teamUrl = 'https://nfl-api1.p.rapidapi.com/nflteamlist';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
      'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com',
    },
  };

  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get(scheduleUrl, options)
      .then((response) => createGameObjects(response.data));
  }, []);

  function homeTeam(allData) {
    let homeArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    let allDataFive;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].competitions;

        for (let property in allDataTwo) {
          allDataThree = allDataTwo[property].competitors;

          for (let property in allDataThree) {
            allDataFour = allDataThree[property].homeAway;
            allDataFive = allDataThree[property].team.displayName;

            if (allDataFour === 'home') {
              homeArr.push(allDataFive);
            }
          }
        }
      }
    }
    return homeArr;
  }

  function homeScore(allData) {
    let homeScoreArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    let allDataFive;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].competitions;

        for (let property in allDataTwo) {
          allDataThree = allDataTwo[property].competitors;

          for (let property in allDataThree) {
            allDataFour = allDataThree[property].homeAway;
            allDataFive = allDataThree[property].score;

            if (allDataFour === 'home') {
              homeScoreArr.push(allDataFive);
            }
          }
        }
      }
    }
    return homeScoreArr;
  }

  function homeRecord(allData) {
    let homeRecordArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    let allDataFive;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].competitions;

        for (let property in allDataTwo) {
          allDataThree = allDataTwo[property].competitors;

          for (let property in allDataThree) {
            allDataFour = allDataThree[property].homeAway;
            allDataFive = allDataThree[property].records[0].summary;

            if (allDataFour === 'home') {
              homeRecordArr.push(allDataFive);
            }
          }
        }
      }
    }
    return homeRecordArr;
  }

  function awayTeam(allData) {
    let awayArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    let allDataFive;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].competitions;

        for (let property in allDataTwo) {
          allDataThree = allDataTwo[property].competitors;

          for (let property in allDataThree) {
            allDataFour = allDataThree[property].homeAway;
            allDataFive = allDataThree[property].team.displayName;

            if (allDataFour === 'away') {
              awayArr.push(allDataFive);
            }
          }
        }
      }
    }
    return awayArr;
  }

  function awayScore(allData) {
    let awayScoreArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    let allDataFive;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].competitions;

        for (let property in allDataTwo) {
          allDataThree = allDataTwo[property].competitors;

          for (let property in allDataThree) {
            allDataFour = allDataThree[property].homeAway;
            allDataFive = allDataThree[property].score;

            if (allDataFour === 'away') {
              awayScoreArr.push(allDataFive);
            }
          }
        }
      }
    }
    return awayScoreArr;
  }

  function awayRecord(allData) {
    let awayRecordArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    let allDataFive;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].competitions;

        for (let property in allDataTwo) {
          allDataThree = allDataTwo[property].competitors;

          for (let property in allDataThree) {
            allDataFour = allDataThree[property].homeAway;
            allDataFive = allDataThree[property].records[0].summary;

            if (allDataFour === 'away') {
              awayRecordArr.push(allDataFive);
            }
          }
        }
      }
    }
    return awayRecordArr;
  }

  function gameName(allData) {
    let gameArr = [];
    let allDataOne;
    let allDataTwo;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].name;

        gameArr.push(allDataTwo);
      }
    }
    return gameArr;
  }

  function gameDate(allData) {
    let dateArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].status;

        allDataThree = allDataTwo.type.detail;

        dateArr.push(allDataThree);
      }
    }
    return dateArr;
  }

  function homeLogo(allData) {
    let homeLogoArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    let allDataFive;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].competitions;

        for (let property in allDataTwo) {
          allDataThree = allDataTwo[property].competitors;

          for (let property in allDataThree) {
            allDataFour = allDataThree[property].team.logo;
            allDataFive = allDataThree[property].homeAway;

            if (allDataFive === 'home') {
              homeLogoArr.push(allDataFour);
            }
          }
        }
      }
    }
    return homeLogoArr;
  }

  function awayLogo(allData) {
    let awayLogoArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    let allDataFive;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].competitions;

        for (let property in allDataTwo) {
          allDataThree = allDataTwo[property].competitors;

          for (let property in allDataThree) {
            allDataFour = allDataThree[property].team.logo;
            allDataFive = allDataThree[property].homeAway;

            if (allDataFive === 'away') {
              awayLogoArr.push(allDataFour);
            }
          }
        }
      }
    }
    return awayLogoArr;
  }

  //   function gameSituation(allData) {
  //     let situationArr = [];
  //     let allDataOne;
  //     let allDataTwo;
  //     let allDataThree;
  //     let allDataFour;
  //     for (let i in allData) {
  //       allDataOne = allData[i].games;

  //       for (let i in allDataOne) {
  //         allDataTwo = allDataOne[i].competitions;

  //         for (let i in allDataTwo) {
  //           allDataThree = allDataTwo[i].situation;

  //           allDataFour = `${allDataThree.shortDownDistanceText} at ${allDataThree.possessionText}`;

  //           situationArr.push(allDataFour);
  //         }
  //       }
  //     }
  //     return situationArr;
  //   }

  function createGameObjects(data) {
    let allGames = [];
    let homeArr = homeTeam(data);
    let homeScoreArr = homeScore(data);
    let homeRecordArr = homeRecord(data);
    let awayArr = awayTeam(data);
    let awayScoreArr = awayScore(data);
    let awayRecordArr = awayRecord(data);
    let gameArr = gameName(data);
    let dateArr = gameDate(data);
    let homeLogoArr = homeLogo(data);
    let awayLogoArr = awayLogo(data);
    // let situationArr = gameSituation(data);
    homeArr.forEach((team) => {
      let game = {};
      game.homeTeam = team;
      allGames.push(game);
    });
    for (let i = 0; i < allGames.length; i++) {
      allGames[i].id = i + 1;
      allGames[i].homeScore = homeScoreArr[i];
      allGames[i].homeRecord = homeRecordArr[i];
      allGames[i].homeLogo = homeLogoArr[i];
      allGames[i].awayTeam = awayArr[i];
      allGames[i].awayScore = awayScoreArr[i];
      allGames[i].awayRecord = awayRecordArr[i];
      allGames[i].awayLogo = awayLogoArr[i];
      allGames[i].gameName = gameArr[i];
      allGames[i].gameDate = dateArr[i];
    }
    setGames(allGames);
  }

  //   function teamCall() {
  //     axios
  //       .get(teamUrl, options)
  //       .then((response) => {
  //         const allData = response.data;

  //         let teamArr = [];
  //         let allDataOne;
  //         let allDataTwo;
  //         let allDataThree;
  //         let allDataFour;

  //         allDataOne = allData.sports;

  //         for (let property in allDataOne) {
  //           allDataTwo = allDataOne[property].leagues;

  //           for (let property in allDataTwo) {
  //             allDataThree = allDataTwo[property].teams;

  //             for (let property in allDataThree) {
  //               allDataFour = allDataThree[property].team.displayName;

  //               teamArr.push(allDataFour);
  //             }
  //           }
  //         }
  //         console.log(teamArr);
  //         return teamArr;
  //       })
  //       .catch((error) => console.error(`Error: ${error}`));
  //   }

  //   function teamWins() {
  //     for (let i = 1; i <= 33; i++) {
  //       let teamId = i;
  //       let teamInfo = `https://nfl-api1.p.rapidapi.com/nflteaminfo?teamid=${teamId}`;

  //       axios
  //         .get(teamInfo, options)
  //         .then((response) => {
  //           const allData = response.data;

  //           let nameData;
  //           let standingData;

  //           if (
  //             allData.team.displayName === 'Afc' ||
  //             allData.team.displayName === 'Nfc'
  //           ) {
  //           } else {
  //             nameData = allData.team.displayName;
  //             standingData = allData.team.standingSummary;

  //             console.log(`${nameData} is ${standingData}`);
  //           }
  //         })
  //         .catch((error) => console.error(`Error: ${error}`));
  //     }
  //   }
  return (
    <div>
      <div>
        <WeeklySchedule games={games} />
      </div>
    </div>
  );
}
