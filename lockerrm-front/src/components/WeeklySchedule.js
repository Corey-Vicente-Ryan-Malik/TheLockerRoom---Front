import { Fragment, useEffect } from "react";

export default function WeeklySchedule(props) {

    let homeArr = props.homeDisplay;
    let awayArr = props.awayDisplay;
    let gameArr = props.gameNameDisplay;
    let dateArr = props.dateDisplay;
    let logoArr = props.logoDisplay;

    

    const homeTeams = homeArr.map(homeTeam => <h3>{homeTeam}</h3>);
    const awayTeams = awayArr.map(awayTeam => <h3>{awayTeam}</h3>);
    const gameName = gameArr.map(game => <div>{game}</div>);
    const gameDate = dateArr.map(date => <div>{date}</div>);
    const teamLogo = logoArr.map(logo => <div>{logo}</div>);
    
    return (
        <div>
            <div>
                {homeTeams}
            </div>
            <div >
                {gameName}
            </div> 
            <div>
                {awayTeams}
            </div>
            <div>
                {gameDate}
            </div>
        </div>
    )

}