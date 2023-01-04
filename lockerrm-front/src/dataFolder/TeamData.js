import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import authService from '../services/auth.service';

export default function HomeData() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');

  const loggedInUser = authService.getCurrentUser();

  const handleSelectedTeam = (e) => {
    setSelectedTeam(e.target.value);
  };
  const submitChange = () => {
    let teamOption = {
      teamId: selectedTeam,
    };
    const teamUrl = `https://nfl-api1.p.rapidapi.com/nflteamplayers?teamid=${teamOption.teamId}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
        'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com',
      },
    };
    axios.get(teamUrl, options).then((response) => {
      createTeamObjects(response.data);
      createPlayerObjects(response.data);
    });
  };

  const teamUrl = `https://nfl-api1.p.rapidapi.com/nflteamplayers?teamid=${loggedInUser.favoriteTeam}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
      'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com',
    },
  };

  useEffect(() => {
    axios.get(teamUrl, options).then((response) => {
      console.log(response.data);
      createTeamObjects(response.data);
      createPlayerObjects(response.data);
    });
  }, []);

  function teamName(allData) {
    let teamNameArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.displayName;

      teamNameArr.push(allDataTwo);
    }
    return teamNameArr;
  }

  function teamId(allData) {
    let teamIdArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.id;

      teamIdArr.push(allDataTwo);
    }
    return teamIdArr;
  }

  function teamStanding(allData) {
    let teamStandingArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.standingSummary;

      teamStandingArr.push(allDataTwo);
    }
    return teamStandingArr;
  }

  function teamLogo(allData) {
    let teamLogoArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.logos[0];
      allDataThree = allDataTwo.href;

      teamLogoArr.push(allDataThree);
    }
    return teamLogoArr;
  }

  function teamSeasonalWins(allData) {
    let teamSeasonalWinsArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.record.items[0].stats;

      for (let i in allDataTwo) {
        allDataThree = allDataTwo[i].name;
        allDataFour = allDataTwo[i].value;

        if (allDataThree === 'wins') {
          teamSeasonalWinsArr.push(allDataFour);
        }
      }
    }
    return teamSeasonalWinsArr;
  }

  function teamSeasonalLosses(allData) {
    let teamSeasonalLossesArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.record.items[0].stats;

      for (let i in allDataTwo) {
        allDataThree = allDataTwo[i].name;
        allDataFour = allDataTwo[i].value;

        if (allDataThree === 'losses') {
          teamSeasonalLossesArr.push(allDataFour);
        }
      }
    }
    return teamSeasonalLossesArr;
  }

  function teamSeasonalTies(allData) {
    let teamSeasonalTiesArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.record.items[0].stats;

      for (let i in allDataTwo) {
        allDataThree = allDataTwo[i].name;
        allDataFour = allDataTwo[i].value;

        if (allDataThree === 'ties') {
          teamSeasonalTiesArr.push(allDataFour);
        }
      }
    }
    return teamSeasonalTiesArr;
  }

  function teamDivisionalWins(allData) {
    let teamDivisionalWinsArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.record.items[0].stats;

      for (let i in allDataTwo) {
        allDataThree = allDataTwo[i].name;
        allDataFour = allDataTwo[i].value;

        if (allDataThree === 'divisionWins') {
          teamDivisionalWinsArr.push(allDataFour);
        }
      }
    }
    return teamDivisionalWinsArr;
  }

  function teamDivisionalLosses(allData) {
    let teamDivisionalLossesArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.record.items[0].stats;

      for (let i in allDataTwo) {
        allDataThree = allDataTwo[i].name;
        allDataFour = allDataTwo[i].value;

        if (allDataThree === 'divisionLosses') {
          teamDivisionalLossesArr.push(allDataFour);
        }
      }
    }
    return teamDivisionalLossesArr;
  }

  function teamDivisionalTies(allData) {
    let teamDivisionalTiesArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.record.items[0].stats;

      for (let i in allDataTwo) {
        allDataThree = allDataTwo[i].name;
        allDataFour = allDataTwo[i].value;

        if (allDataThree === 'divisionTies') {
          teamDivisionalTiesArr.push(allDataFour);
        }
      }
    }
    return teamDivisionalTiesArr;
  }

  function teamLocation(allData) {
    let teamLocationArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.franchise.venue.address.city;
      allDataThree = allDataOne.franchise.venue.address.state;
      allDataFour = `${allDataTwo}, ${allDataThree}`;

      teamLocationArr.push(allDataFour);
    }
    return teamLocationArr;
  }

  function teamStadium(allData) {
    let teamStadiumArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData.team;
      allDataTwo = allDataOne.franchise.venue.fullName;

      teamStadiumArr.push(allDataTwo);
    }
    return teamStadiumArr;
  }

  function athleteName(allData) {
    let athleteNameArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].displayName;

        athleteNameArr.push(allDataTwo);
      }
    }
    return athleteNameArr;
  }

  function athleteHeadshot(allData) {
    let athleteHeadshotArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].headshot;

        for (let i in allDataTwo) {
          if (allDataThree !== allDataTwo.href) {
            allDataThree = allDataTwo.href;

            athleteHeadshotArr.push(allDataThree);
          }
        }
      }
    }
    return athleteHeadshotArr;
  }

  function athleteHeight(allData) {
    let athleteHeightArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].displayHeight;

        athleteHeightArr.push(allDataTwo);
      }
    }
    return athleteHeightArr;
  }

  function athleteWeight(allData) {
    let athleteWeightArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].displayWeight;

        athleteWeightArr.push(allDataTwo);
      }
    }
    return athleteWeightArr;
  }

  function athleteJersey(allData) {
    let athleteJerseyArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].jersey;

        if (allDataTwo === undefined) {
          allDataTwo = 'No Data Found';
          athleteJerseyArr.push(allDataTwo);
        } else {
          athleteJerseyArr.push(allDataTwo);
        }
      }
    }
    return athleteJerseyArr;
  }

  function athleteDraft(allData) {
    let athleteDraftArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].draft;

        if (
          allDataTwo !== undefined &&
          allDataThree !== allDataTwo.displayText
        ) {
          allDataThree = allDataTwo.displayText;
          athleteDraftArr.push(allDataThree);
        } else {
          allDataThree = 'No Data Found';
          athleteDraftArr.push(allDataThree);
        }
      }
    }
    return athleteDraftArr;
  }

  function athletePosition(allData) {
    let athletePositionArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].position;

        if (allDataThree !== allDataTwo.displayName) {
          allDataThree = allDataTwo.displayName;
          athletePositionArr.push(allDataThree);
        } else {
          allDataThree = 'No Data Found';
          athletePositionArr.push(allDataThree);
        }
      }
    }
    return athletePositionArr;
  }

  function athletePostitionAbbr(allData) {
    let athletePositionAbbrArr = [];
    let allDataOne;
    let allDataTwo;
    let allDataThree;
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].position;

        if (allDataThree !== allDataTwo.abbreviation) {
          allDataThree = allDataTwo.abbreviation;
          athletePositionAbbrArr.push(allDataThree);
        } else {
          allDataThree = 'N/A';
          athletePositionAbbrArr.push(allDataThree);
        }
      }
    }
    return athletePositionAbbrArr;
  }

  function athleteAge(allData) {
    let athleteAgeArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].age;

        athleteAgeArr.push(allDataTwo);
      }
    }
    return athleteAgeArr;
  }

  function athleteStatus(allData) {
    let athleteStatusArr = [];
    let allDataOne;
    let allDataTwo;
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].status;

        athleteStatusArr.push(allDataTwo.name);
      }
    }
    return athleteStatusArr;
  }

  function athleteInjuryStatus(allData) {
    let athleteInjuryStatusArr = [];
    let allDataOne = allData.team.athletes;
    let allDataTwo;
    let allDataThree;
    for (let i in allDataOne) {
      allDataTwo = allDataOne[i].injuries[0];

      if (allDataTwo === undefined) {
        allDataThree = 'Injury Status: No Injury';
        athleteInjuryStatusArr.push(allDataThree);
      } else {
        allDataThree = `Injury Status: ${allDataTwo.status}`;
        athleteInjuryStatusArr.push(allDataThree);
      }
    }
    return athleteInjuryStatusArr;
  }

  function athleteInjury(allData) {
    let athleteInjuryArr = [];
    let allDataOne = allData.team.athletes;
    let allDataTwo;
    let allDataThree;
    let allDataFour;
    for (let i in allDataOne) {
      allDataTwo = allDataOne[i].injuries[0];

      if (allDataTwo === undefined) {
        allDataThree = 'Injury: N/A';
        athleteInjuryArr.push(allDataThree);
      } else {
        allDataThree = allDataTwo.details;
        allDataFour = `Injury: ${allDataThree.detail} @ (${allDataThree.side}) ${allDataThree.type}`;
        athleteInjuryArr.push(allDataFour);
      }
    }
    return athleteInjuryArr;
  }

  function createPlayerObjects(data) {
    let allTeamPlayers = [];
    let athleteNameArr = athleteName(data);
    let athleteHeadshotArr = athleteHeadshot(data);
    let athleteHeightArr = athleteHeight(data);
    let athleteWeightArr = athleteWeight(data);
    let athleteJerseyArr = athleteJersey(data);
    let athleteDraftArr = athleteDraft(data);
    let athletePositionArr = athletePosition(data);
    let athletePositionAbbrArr = athletePostitionAbbr(data);
    let athleteAgeArr = athleteAge(data);
    let athleteStatusArr = athleteStatus(data);
    let athleteInjuryStatusArr = athleteInjuryStatus(data);
    let athleteInjuryArr = athleteInjury(data);
    athleteNameArr.forEach((nflPlayer) => {
      let player = {};
      player.playerName = nflPlayer;
      allTeamPlayers.push(player);
    });
    for (let i = 0; i < allTeamPlayers.length; i++) {
      allTeamPlayers[i].playerId = i + 1;
      allTeamPlayers[i].playerHeadshot = athleteHeadshotArr[i];
      allTeamPlayers[i].playerHeight = athleteHeightArr[i];
      allTeamPlayers[i].playerWeight = athleteWeightArr[i];
      allTeamPlayers[i].playerJersey = athleteJerseyArr[i];
      allTeamPlayers[i].playerDraft = athleteDraftArr[i];
      allTeamPlayers[i].playerPosition = athletePositionArr[i];
      allTeamPlayers[i].playerPositionAbbr = athletePositionAbbrArr[i];
      allTeamPlayers[i].playerAge = athleteAgeArr[i];
      allTeamPlayers[i].playerStatus = athleteStatusArr[i];
      allTeamPlayers[i].playerInjuryStatus = athleteInjuryStatusArr[i];
      allTeamPlayers[i].playerInjury = athleteInjuryArr[i];
    }
    setPlayers(allTeamPlayers);
  }

  function createTeamObjects(data) {
    let allTeams = [];
    let teamNameArr = teamName(data);
    let teamIdArr = teamId(data);
    let teamStandingArr = teamStanding(data);
    let teamLogoArr = teamLogo(data);
    let teamLocationArr = teamLocation(data);
    let teamStadiumArr = teamStadium(data);
    let teamSeasonalWinsArr = teamSeasonalWins(data);
    let teamSeasonalLossesArr = teamSeasonalLosses(data);
    let teamSeasonalTiesArr = teamSeasonalTies(data);
    let teamDivisionalWinsArr = teamDivisionalWins(data);
    let teamDivisionalLossesArr = teamDivisionalLosses(data);
    let teamDivisionalTiesArr = teamDivisionalTies(data);
    teamNameArr.forEach((nflTeam) => {
      let team = {};
      team.teamName = nflTeam;
      allTeams.push(team);
    });
    for (let i = 0; i < allTeams.length; i++) {
      allTeams[i].teamId = teamIdArr[i];
      allTeams[i].teamStanding = teamStandingArr[i];
      allTeams[i].teamLogo = teamLogoArr[i];
      allTeams[i].teamLocation = teamLocationArr[i];
      allTeams[i].teamStadium = teamStadiumArr[i];
      allTeams[i].teamSeasonalWins = teamSeasonalWinsArr[i];
      allTeams[i].teamSeasonalLosses = teamSeasonalLossesArr[i];
      allTeams[i].teamSeasonalTies = teamSeasonalTiesArr[i];
      allTeams[i].teamDivisionalWins = teamDivisionalWinsArr[i];
      allTeams[i].teamDivisionalLosses = teamDivisionalLossesArr[i];
      allTeams[i].teamDivisionalTies = teamDivisionalTiesArr[i];
    }
    setTeams(allTeams);
  }

  const homeView = {
    textAlign: 'center',
    display: 'grid',
  };
  const teamCard = {
    gridColumn: 1,
    gridRow: 1,
    border: '1px solid black',
  };
  const playerIndex = {
    gridColumn: 2,
    gridRow: 1,
    border: '1px solid black',
  };
  const playerCard = {
    border: '1px solid black',
  };
  const teamImage = {
    width: '100px',
    height: '100px',
  };
  const playerImage = {
    width: '125px',
    height: '100px',
  };

  return (
    <div>
      <select name="teamId" onBlur={handleSelectedTeam}>
        <option name="favoriteOption">
          Select the team you would like to view!
        </option>
        <option name="favoriteOption" value="1">
          Atlanta Falcons
        </option>
        <option name="favoriteOption" value="2">
          Buffalo Bills
        </option>
        <option name="favoriteOption" value="3">
          Chicago Bears
        </option>
        <option name="favoriteOption" value="4">
          Cincinnati Bengals
        </option>
        <option name="favoriteOption" value="5">
          Cleveland Browns
        </option>
        <option name="favoriteOption" value="6">
          Dallas Cowboys
        </option>
        <option name="favoriteOption" value="7">
          Denver Broncos
        </option>
        <option name="favoriteOption" value="8">
          Detroit Lions
        </option>
        <option name="favoriteOption" value="9">
          Green Bay Packers
        </option>
        <option name="favoriteOption" value="10">
          Tennessee Titans
        </option>
        <option name="favoriteOption" value="11">
          Indianapolis Colts
        </option>
        <option name="favoriteOption" value="12">
          Kansas City Chiefs
        </option>
        <option name="favoriteOption" value="13">
          Las Vegas Raiders
        </option>
        <option name="favoriteOption" value="14">
          Los Angeles Rams
        </option>
        <option name="favoriteOption" value="15">
          Miami Dolphins
        </option>
        <option name="favoriteOption" value="16">
          Minnesota Vikings
        </option>
        <option name="favoriteOption" value="17">
          New England Patriots
        </option>
        <option name="favoriteOption" value="18">
          New Orleans Saints
        </option>
        <option name="favoriteOption" value="19">
          New York Giants
        </option>
        <option name="favoriteOption" value="20">
          New York Jets
        </option>
        <option name="favoriteOption" value="21">
          Philadelphia Eagles
        </option>
        <option name="favoriteOption" value="22">
          Arizona Cardinals
        </option>
        <option name="favoriteOption" value="23">
          Pittsburgh Steelers
        </option>
        <option name="favoriteOption" value="24">
          Los Angeles Chargers
        </option>
        <option name="favoriteOption" value="25">
          San Fransisco 49ers
        </option>
        <option name="favoriteOption" value="26">
          Seattle Seahawks
        </option>
        <option name="favoriteOption" value="27">
          Tampa Bay Buccaneers
        </option>
        <option name="favoriteOption" value="28">
          Washington Commanders
        </option>
        <option name="favoriteOption" value="29">
          Carolina Panthers
        </option>
        <option name="favoriteOption" value="30">
          Jacksonville Jaguars
        </option>
        <option name="favoriteOption" value="33">
          Baltimore Ravens
        </option>
        <option name="favoriteOption" value="34">
          Houston Texans
        </option>
      </select>
      <button onClick={submitChange}>View Team</button>
      <div style={homeView}>
        {teams.map((team) => {
          return (
            <div key={team.teamId}>
              <div className="teamInformation" style={teamCard}>
                <h1>Team Information</h1>
                <h3>{team.teamName}</h3>
                <p>{team.teamStanding}</p> <br />
                <img
                  src={team.teamLogo}
                  alt="Team Logo"
                  style={teamImage}
                />{' '}
                <br />
                <p>
                  {team.teamSeasonalWins} - {team.teamSeasonalLosses} -{' '}
                  {team.teamSeasonalTies}
                </p>{' '}
                <br />
                <p>
                  {team.teamDivisionalWins} - {team.teamDivisionalLosses} -{' '}
                  {team.teamDivisionalTies}
                </p>{' '}
                <br />
                <p>{team.teamStadium}</p> <br />
                <p>{team.teamLocation}</p> <br />
              </div>
            </div>
          );
        })}
        <div className="playerInformaion" style={playerIndex}>
          <h1>Player Information</h1>
          {players.map((player) => {
            return (
              <div key={player.playerId}>
                <div style={playerCard}>
                  <img
                    src={player.playerHeadshot}
                    alt="Player Headshot"
                    style={playerImage}
                  />
                  <div>
                    Name(age): {player.playerName} ({player.playerAge})
                  </div>
                  <div>Status: {player.playerStatus}</div>
                  <div>{player.playerInjuryStatus}</div>
                  <div>{player.playerInjury}</div>
                  <div>Jersey #: {player.playerJersey}</div>
                  <div>Draft Information: {player.playerDraft}</div>
                  <div>
                    Position: {player.playerPosition} - (
                    {player.playerPositionAbbr})
                  </div>
                  <div>
                    Ht / Wt: {player.playerHeight} - {player.playerWeight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
