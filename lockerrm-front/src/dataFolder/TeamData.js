import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

export default function TeamData() {
  const teamUrl = 'https://nfl-api1.p.rapidapi.com/nflteaminfo?teamid=25';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '030599a025msh7d87a89a5158c47p19faabjsnf8d88956da48',
      'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com',
    },
  };

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get(teamUrl, options).then((response) => {
      console.log(response.data);
      createTeamObjects(response.data);
    });

    // for (let i = 1; i < 34; i++) {
    //   if (i === 31 || i === 32) {
    //   } else {
    //     axios
    //       .get(
    //         `https://nfl-api1.p.rapidapi.com/nflteaminfo?teamid=${i}`,
    //         options
    //       )
    //       .then((response) => {
    //         console.log(response.data);
    //         createTeamObjects(response.data);
    //       });
    //   }
    // }
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

  const cardLayout = {
    display: 'flex',
    border: '1px solid black',
    width: '80vw',
    margin: '15px auto',
  };

  const cardItem = {
    display: 'flex',
    border: '1px solid black',
    width: '33.33%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
  };

  const image = {
    width: '200px',
    height: '200px',
  };

  const textCenter = {
    textAlign: 'center',
  };

  const button = {
    width: '200px',
    height: '100px',
  };

  return (
    <React.Fragment>
      {teams.map((team) => {
        return (
          <div key={team.teamId} style={cardLayout}>
            <div style={cardItem}>
              <div style={textCenter}>
                {team.teamName} <br />
                {team.teamStanding} <br />
                Seasonal Record: {team.teamSeasonalWins} -{' '}
                {team.teamSeasonalLosses} - {team.teamSeasonalTies}
                <br />
                Divisional Record: {team.teamDivisionalWins} -{' '}
                {team.teamDivisionalLosses} - {team.teamDivisionalTies}
              </div>
            </div>
            <div style={cardItem}>
              <img src={team.teamLogo} style={image} alt="Team's Logo" />
            </div>
            <div style={cardItem}>
              <div style={textCenter}>
                {team.teamStadium} <br />
                {team.teamLocation}
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
