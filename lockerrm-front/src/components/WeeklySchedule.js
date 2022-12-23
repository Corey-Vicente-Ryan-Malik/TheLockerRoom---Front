import React, { Fragment, useEffect } from 'react';

export default function WeeklySchedule({ games }) {
  const cardStyle = {
    display: 'grid',
  };

  const homeStyle = {
    gridColumn: 1,
    gridRow: 1,
  };

  const homeImage = {
    gridColumn: 2,
    gridRow: 1,
  };

  const gameNameStyle = {
    gridColumn: 3,
    gridRow: 1,
  };

  const awayStyle = {
    gridColumn: 5,
    gridRow: 1,
  };

  const awayImage = {
    gridColumn: 4,
    gridRow: 1,
  };

  const gameDateStyle = {
    gridColumn: 3,
    gridRow: 2,
  };

  const image = {
    width: '75px',
    height: '75px',
  };

  return (
    <React.Fragment>
      {games.map((game) => {
        return (
          <div key={game.id} className="weeklyGame" style={cardStyle}>
            <div id="homeTeam" style={homeStyle}>
              {game.homeTeam}
            </div>
            <div id="homeLogo" style={homeImage}>
              <img src={game.homeLogo} style={image} alt="Home Team Logo" />
            </div>
            <div id="gameName" style={gameNameStyle}>
              {game.gameName}
            </div>
            <div id="awayTeam" style={awayStyle}>
              {game.awayTeam}
            </div>
            <div id="awayLogo" style={awayImage}>
              <img src={game.awayLogo} style={image} alt="Away Team Logo" />
            </div>
            <div id="gameDate" style={gameDateStyle}>
              {game.gameDate}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
