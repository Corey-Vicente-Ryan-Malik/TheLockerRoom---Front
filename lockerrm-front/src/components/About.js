import about1 from '../images/about1.jpeg';
import about2 from '../images/about2.jpeg';
import about3 from '../images/about3.jpeg';
import React from "react";

export default function About() {

    return (
        // <div className="About">
        //     <div style={aboutContent}>
        //         <div className="aboutHeader">
        //             <h1>Team United. Strength in Unity !</h1>
        //
        //             <p class="col-md-6">
        //                 In The Locker Room, there is an aura that revolves around the world of football, and our goal is
        //                 to fuel that fire by creating a space where all football fans can come together and share our
        //                 love for the sport! Here fans from all 32 teams can share every moment of triumph, heartbreak,
        //                 and everything in between. Our dedication to giving our users the most up-to-date news and an
        //                 environment where everyone can enjoy our platform is our top priority!
        //             </p>
        //         </div>
        //
        //         <div>
        //             <img className="about1" style={About1} src={about1}/>
        //         </div>
        //
        //         <div>
        //             <img className="about2" style={About2} src={about2}/>
        //         </div>
        //
        //         <div>
        //             <img className="about3" style={About3} src={about3}/>
        //         </div>
        //     </div>
        // </div>
        <div style={aboutPage}>
            <div style={aboutContent}>
                <h1>Team United. Strength in Unity !</h1>
                <p>
                     In The Locker Room, there is an aura that revolves around the world of football, and our goal is
                     to fuel that fire by creating a space where all football fans can come together and share our
                     love for the sport! Here fans from all 32 teams can share every moment of triumph, heartbreak,
                     and everything in between. We have created a space where you can react to real time events without having to go to social media to comment.  The Locker Room gives all of its users quick access to all game and team information without all of the unnecessary ads.
                 </p>
            </div>
            <div style={aboutImage1}>
                <img className="about1" src={about1} style={image}/>
            </div>
            <div style={aboutImage2}>
                <img className="about1" src={about2} style={image}/>
            </div>
            <div style={aboutImage3}>
                <img className="about1" src={about3} style={image}/>
            </div>
        </div>
    );
}

const aboutPage={
    display: 'grid',
    width: '100%'
}
const aboutContent={
    gridColumn: 1,
    gridRow: 1,
    margin: '0 auto',
    width: '80%',
    textAlign: 'center'
}
const aboutImage1={
    gridColumn: 1,
    gridRow: 2,
    display: 'flex',
    margin: '5px auto',
    width: '80vw',
    justifyContent: 'center',
    justifyItems:'center',
    alignContent: 'center',
    alignItems: 'center'
}
const aboutImage2={
    gridColumn: 1,
    gridRow: 3,
    display: 'flex',
    margin: '5px auto',
    width: '80vw',
    justifyContent: 'center',
    justifyItems:'center',
    alignContent: 'center',
    alignItems: 'center'
}
const aboutImage3={
    gridColumn: 1,
    gridRow: 4,
    display: 'flex',
    margin: '5px auto',
    width: '80vw',
    justifyContent: 'center',
    justifyItems:'center',
    alignContent: 'center',
    alignItems: 'center'
}
const image={
    height: '70%',
    width: '70%',
}
{

// const

// const About1 = {
//     // gridColumn: 1,
//     // gridRow: 1,
//     margin: '0 auto',
//     width: '88vw',
//     height: '70vh',
//     display: 'flex',
//     justifyContent: 'center',
//     justifyItems: 'center',
//     alignItems: 'center',
// }
//
// const About2 = {
//     margin: '0 auto',
//     width: '50vw',
//     height: '70vh',
//     display: 'flex',
//     justifyContent: 'center',
//     justifyItems: 'center',
//     alignItems: 'center',
// }
//
// const About3 = {
//     margin: '0 auto',
//     width: '50vw',
//     height: '70vh',
//     display: 'flex',
//     justifyContent: 'center',
//     justifyItems: 'center',
//     alignItems: 'center',
}

// const aboutContent = {
//     // justifyContent: 'center',
//     alignItems:'center',
//     // marginLeft:'auto',
//     // marginRight:'auto'
//     // display:'flex',
//     margin:'50px auto'
//
//
// }
