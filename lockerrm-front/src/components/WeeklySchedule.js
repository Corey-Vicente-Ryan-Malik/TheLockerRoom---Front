import { Fragment } from "react";

export default function WeeklySchedule(props) {

    let homeArr = props.homeDisplay;
    let awayArr = props.awayDisplay;
    let gameArr = props.gameNameDisplay;
    let dateArr = props.dateDisplay;
    let logoArr = props.logoDisplay;

    // const homeTeams = homeArr.map(homeTeam => <h3>{homeTeam}</h3>);
    // const awayTeams = awayArr.map(awayTeam => <h3>{awayTeam}</h3>);
    // const gameName = gameArr.map(game => <div>{game}</div>);
    // const gameDate = dateArr.map(date => <div>{date}</div>);
    // const teamLogo = logoArr.map(logo => <div>{logo}</div>);

    // console.log(homeTeams);
    // console.log(homeArr);

    let gameCards = '';

    for(let i in homeArr) {
        let homeTeam = homeArr[i];

        for(let i in awayArr) {
            let awayTeam = awayArr[i];

            for(let i in gameArr) {
                let gameName = gameArr[i];

                for(let i in dateArr) {
                    let gameDate = dateArr[i];

                    for(let i in logoArr) {
                        let teamLogo = logoArr[i];

                        gameCards = `<div class="gameCard">
                                        <div>${homeTeam}</div>
                                        <div>${awayTeam}</div>
                                        <div>${gameName}</div>
                                        <div>${gameDate}</div>
                                        <img>${teamLogo}</img>
                                    </div>`

                                    return (
                                        <Fragment>{gameCards}</Fragment>
                                    )
                    } 
                }
            }
        }
    }
    // console.log(gameCards);
}




    // let gameCard = "";

    // for(let i in homeTeams) {
    //     console.log(homeTeams[i].props.children)
            
        
        
        
        
        
        
    //     gameCard += `<div class="gameCard">
    //                 <div>${homeTeams[i].props.children}</div>
    //                 <div>${awayTeams}</div>
    //                 <div>${gameName}</div>
    //                 <div>${gameDate}</div>
    //                 <img>${teamLogo}</img>
    //             </div>`
    // }

//     return (
//         // <Fragment>{gameCard}</Fragment> 
//         console.log()      
//     )
// }