import { Fragment, useEffect } from "react";

export default function WeeklySchedule(props) {

    let homeArr = props.homeDisplay;
    let awayArr = props.awayDisplay;
    let gameArr = props.gameNameDisplay;
    let dateArr = props.dateDisplay;

    const homeTeams = homeArr.map(homeTeam => <h3>{homeTeam}</h3>);
    const awayTeams = awayArr.map(awayTeam => <h3>{awayTeam}</h3>);
    const gameName = gameArr.map(game => <h3>{game}</h3>);
    const gameDate = dateArr.map(date => <h3>{date}</h3>);

    const cardStyle = {
        display: 'grid'
    }
    
    const homeStyle = {
        gridColumn: 1,
        gridRow: 1,
    }
    
    const gameNameStyle = {
        gridColumn: 2,
        gridRow: 1,
    }

    const awayStyle = {
        gridColumn: 3,
        gridRow: 1,
    }

    const gameDateStyle = {
        gridColumn: 4,
        gridRow: 1,
    }
    
    return (
        <div style={cardStyle}>
            <div id='homeTeam' style={homeStyle}>
                {homeTeams}
            </div>
            <div id='gameName' style={gameNameStyle}>
                {gameName}
            </div> 
            <div id='awayTeam' style={awayStyle}>
                {awayTeams}
            </div>
            <div id='gameDate' style={gameDateStyle}>
                {gameDate}
            </div>
        </div>
    )
}