import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import authService from '../services/auth.service';
import '../StyleFolder/HomeStyle.css';

export default function HomeData() {
  const loggedInUser = authService.getCurrentUser();
  // console.log(loggedInUser);

  const teamUrl = `https://nfl-api1.p.rapidapi.com/nflteamplayers?teamid=${loggedInUser.favoriteTeam}`;

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

  return (
    <div className="home_container">
      <div className="team_container">
        {teams.map((team) => {
          return (
            <div key={team.teamId} className="team_containerWhole">
              <div className="team_containerLeft">
                <img
                  className="team_image"
                  src={team.teamLogo}
                  alt="Team Logo"
                />
              </div>
              <div className="team_containerRight">
                <div className="team_title">{team.teamName}</div>
                <div className="team_info">
                  <div>{team.teamStanding}</div>
                  <div>
                    Seasonal Record : {team.teamSeasonalWins} -{' '}
                    {team.teamSeasonalLosses} - {team.teamSeasonalTies}
                  </div>
                  <div>
                    Divisional Record : {team.teamDivisionalWins} -{' '}
                    {team.teamDivisionalLosses} - {team.teamDivisionalTies}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="player_container">
        <h1>Player Details</h1> <br />
        {players.map((player) => {
          return (
            <div key={player.playerId} className="container_card">
              <div className="main_card">
                <div className="card_image">
                  <img
                    className="player_image"
                    src={player.playerHeadshot}
                    alt="Player HeadShot"
                  />
                </div>
                <div className="card_content">
                  <div className="card_title">
                    {player.playerName} - ({player.playerAge})
                  </div>
                  <div className="card_info">
                    <div>
                      {player.playerPosition} - {player.playerPositionAbbr}
                    </div>
                    <div>
                      {player.playerHeight} - {player.playerWeight}
                    </div>
                    <div>Jersey: {player.playerJersey}</div>
                    <div>{player.playerInjuryStatus}</div>
                    <div>{player.playerInjury}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
