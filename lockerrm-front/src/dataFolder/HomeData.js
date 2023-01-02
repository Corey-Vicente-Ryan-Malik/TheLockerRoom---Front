import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

export default function HomeData() {
  const teamUrl = 'https://nfl-api1.p.rapidapi.com/nflteamplayers?teamid=26';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
      'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com',
    },
  };

  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);

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
    for (let i in allData) {
      allDataOne = allData.team.athletes;

      for (let i in allDataOne) {
        allDataTwo = allDataOne[i].headshot.href;

        athleteHeadshotArr.push(allDataTwo);
      }
    }
    return athleteHeadshotArr;
  }

  function createPlayerObjects(data) {
    let allTeamPlayers = [];
    let athleteNameArr = athleteName(data);
    let athleteHeadshotArr = athleteHeadshot(data);
    athleteNameArr.forEach((nflPlayer) => {
      let player = {};
      player.playerName = nflPlayer;
      allTeamPlayers.push(player);
    });
    for (let i = 0; i < allTeamPlayers.length; i++) {
      allTeamPlayers[i].playerId = i + 1;
      allTeamPlayers[i].playerAthleteHeadshot = athleteHeadshotArr[i];
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
  const playerCard = {
    gridColumn: 2,
    gridRow: 1,
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
    <div style={homeView}>
      {teams.map((team) => {
        return (
          <div key={team.teamId}>
            <div className="teamInformation" style={teamCard}>
              <h1>Team Information</h1>
              <h3>{team.teamName}</h3>
              <p>{team.teamStanding}</p> <br />
              <img src={team.teamLogo} alt="Team Logo" style={teamImage} />{' '}
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
      {players.map((player) => {
        return (
          <div key={player.playerId}>
            <div className="playerInformation" style={playerCard}>
              <h1>Player Information</h1>
              <img
                src={player.playerAthleteHeadshot}
                alt="Player Headshot"
                style={playerImage}
              />
              <p>{player.playerName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
