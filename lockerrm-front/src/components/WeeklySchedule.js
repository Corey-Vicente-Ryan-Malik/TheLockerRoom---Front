import { Fragment } from "react";

export default function WeeklySchedule(props) {

    let homeArr = props.homeDisplay;
    let awayArr = props.awayDisplay;
    let gameArr = props.gameNameDisplay;
    let dateArr = props.dateDisplay;
    let logoArr = props.logoDisplay;

    return (
        '<div>' + homeArr + '</div>'
    )

    
    
}

    // const homeTeams = homeArr.map(homeTeam => <h3>{homeTeam}</h3>);
    // const awayTeams = awayArr.map(awayTeam => <h3>{awayTeam}</h3>);
    // const gameName = gameArr.map(game => <div>{game}</div>);
    // const gameDate = dateArr.map(date => <div>{date}</div>);
    // const teamLogo = logoArr.map(logo => <div>{logo}</div>);

    // console.log(homeTeams);
    // console.log(homeArr);

    

    // for(let i in homeArr) {
    //     let homeTeam = homeArr;

    //     for(let i in awayArr) {
    //         let awayTeam = awayArr;

    //         for(let i in gameArr) {
    //             let gameName = gameArr;

    //             for(let i in dateArr) {
    //                 let gameDate = dateArr;

    //                 for(let i in logoArr) {
    //                     let teamLogo = logoArr;

                        // gameCards = `<div class="gameCard">
                        //                 <div>${homeTeam[i]}</div>
                        //                 <div>${awayTeam[i]}</div>
                        //                 <div>${gameName[i]}</div>
                        //                 <div>${gameDate[i]}</div>
                        //                 <img>${teamLogo[i]}</img>
                        //             </div>`

                        //             return (
                        //                 <Fragment>{gameCards}</Fragment>
                        //             )
    //                 } 
    //             }
    //         }
    //     }
    // }





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