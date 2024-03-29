import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import '../StyleFolder/GameStyle.css';

export default function GameData() {
  const scheduleUrl =
    'https://nfl-api1.p.rapidapi.com/nflschedule?year=2024&month=03&day=31';

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
      // .then((response) => createGameObjects(response.data));
      .then((response) => {
        createGameObjects(response.data);
        console.log(response.data);
      });
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

  function homeColor(allData) {
    let homeColorArr = [];
    let homeSecColorArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    let allDataFive;
    let allDataSix;
    for (let property in allData) {
      allDataOne = allData[property].games;

      for (let property in allDataOne) {
        allDataTwo = allDataOne[property].competitions;

        for (let property in allDataTwo) {
          allDataThree = allDataTwo[property].competitors;

          for (let property in allDataThree) {
            allDataFour = allDataThree[property].team.color;
            allDataSix = allDataThree[property].team.alternateColor;
            allDataFive = allDataThree[property].homeAway;

            if (allDataFive === 'home') {
              homeColorArr.push(allDataFour);
              homeSecColorArr.push(allDataSix);
            }
          }
        }
      }
    }
    return homeColorArr;
  }

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
    let homeColorArr = homeColor(data);
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
      allGames[i].homeColor = homeColorArr[i];
    }
    setGames(allGames);
  }

  return (
    <div className="weekly_container">
      <div className="schedule">Weekly Schedule</div>
      {games.map((game) => {
        return (
          <div key={game.id}>
            <div
              className="game_container"
              style={
                game.gameDate !== 'Final'
                  ? { border: `3px solid #${game.homeColor}` }
                  : { border: '3px solid red' }
              }
            >
              <div className="game_leftContainer">
                <div className="away_title">Away</div>
                <img
                  className="away_logo"
                  src={game.awayLogo}
                  alt="Team Logo"
                />
                <div className="away_team">{game.awayTeam}</div>
                <div className="away_record">({game.awayRecord})</div>
              </div>
              <div className="game_middleContainer">
                <div className="game_name">{game.gameName}</div>
                <div className="game_date">{game.gameDate}</div>
                <div className="game_score">
                  {game.awayScore} - {game.homeScore}
                </div>
              </div>
              <div className="game_rightContainer">
                <div className="home_title">Home</div>
                <img
                  className="home_logo"
                  src={game.homeLogo}
                  alt="Team Logo"
                />
                <div className="home_team">{game.homeTeam}</div>
                <div className="home_record">({game.homeRecord})</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
