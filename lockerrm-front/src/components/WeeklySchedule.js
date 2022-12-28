import React from 'react';

export default function WeeklySchedule({ games }) {
  const cardStyle = {
    display: 'flex',
    border: '1px solid black',
    width: '98vw',
    margin: '15px auto',
  };

  const homeStyle = {
    display: 'flex',
    border: '1px solid black',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const homeImage = {
    display: 'flex',
    border: '1px solid black',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const gameNameStyle = {
    display: 'flex',
    border: '1px solid black',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const awayStyle = {
    display: 'flex',
    border: '1px solid black',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const awayImage = {
    display: 'flex',
    border: '1px solid black',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const gameDateStyle = {
    display: 'flex',
    border: '1px solid black',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const image = {
    width: '100px',
    height: '100px',
  };

  const textCenter = {
    textAlign: 'center',
  };

  return (
    <React.Fragment>
      {games.map((game) => {
        return (
          <div key={game.id} style={cardStyle}>
            <div style={homeStyle}>
              <div style={textCenter}>
                {game.homeTeam} <br />
                {game.homeRecord}
              </div>
            </div>

            <div style={homeImage}>
              <img src={game.homeLogo} style={image} alt="Home Team Logo" />
            </div>

            <div style={gameNameStyle}>
              <div style={textCenter}>
                {game.gameName} <br />
                {game.gameDate} <br />
                {game.gameSituation}
                <div>
                  {game.homeScore} - {game.awayScore}
                </div>
              </div>
            </div>

            <div style={awayImage}>
              <img src={game.awayLogo} style={image} alt="AwayTeamLogo" />
            </div>

            <div style={awayStyle}>
              <div style={textCenter}>
                {game.awayTeam} <br />
                {game.awayRecord}
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
