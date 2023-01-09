import about1 from '../images/CO.jpg';
import about2 from '../images/RH.jpeg';
import about3 from '../images/MW.JPG';
import about4 from '../images/VF2.jpeg';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function About() {

    return (

        <div style={aboutPage}>
            <div style={aboutContent}>
                <h1>Team United. Strength in Unity !</h1>
                <p>
                    In The Locker Room, there is an aura that revolves around the world of football, and our goal is
                    to fuel that fire by creating a space where all football fans can come together and share our
                    love for the sport! Here fans from all 32 teams can share every moment of triumph, heartbreak,
                    and everything in between. We have created a space that serves as a midpoint between major sports
                    platforms and social media where you can react to real time events without having to go to social
                    media to comment. The Locker Room gives all of its users quick access to all game and team
                    information without all of the unnecessary ads.
                </p>
            </div>

            <h1>Meet The Developers!</h1>

            <div className="Developer" style={Developer}>


                <Card style={{width: '18rem', margin: '15px'}}>
                    <Card.Img variant="top" src={about1}/>
                    <Card.Body>
                        <Card.Title>Corey Osbey</Card.Title>
                        <Card.Text>
                            <a target={"_blank"} href="https://www.linkedin.com/in/coreyosbey/"> <i style={icon} className="fa-brands fa-linkedin"></i></a>
                            <a target={"_blank"} href="https://github.com/Cosbey1 "><i style={icon} className="fa-brands fa-github"></i></a>
                            <a target={"_blank"} href="https://alumni.codeup.com/students/1669"><i style={icon} className="fa-solid fa-envelope"></i></a>
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card style={{width: '18rem', margin: '15px'}}>
                    <Card.Img variant="top" src={about2}/>
                    <Card.Body>
                        <Card.Title>Ryan Harris</Card.Title>
                        <Card.Text >
                            <a target={"_blank"} href="https://www.linkedin.com/in/ryantharris/ "><i style={icon} className="fa-brands fa-linkedin"></i></a>
                            <a target={"_blank"} href="https://github.com/ryant67 "><i style={icon} className="fa-brands fa-github"></i></a>
                            <a target={"_blank"} href="https://alumni.codeup.com/students/1657"><i style={icon} className="fa-solid fa-envelope"></i></a>
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card style={{width: '18rem', margin: '15px'}}>
                    <Card.Img variant="top" src={about3}/>
                    <Card.Body>
                        <Card.Title>Malik Willis</Card.Title>
                        <Card.Text>
                            <a target={"_blank"} href="https://www.linkedin.com/in/malik-willis-71778924a/"><i style={icon} className="fa-brands fa-linkedin"></i></a>
                            <a target={"_blank"} href="https://github.com/Leek995"><i style={icon} className="fa-brands fa-github"></i></a>
                            <a target={"_blank"} href="https:// "><i style={icon} className="fa-solid fa-envelope"></i></a>
                        </Card.Text>

                    </Card.Body>
                </Card>

                <Card style={{width: '18rem', margin: '15px'}}>
                    <Card.Img variant="top" src={about4}/>
                    <Card.Body>
                        <Card.Title>Vicente Figueroa</Card.Title>
                        <Card.Text>
                            <a target={"_blank"} href="https://www.linkedin.com/in/vicentefigueroa-dev/"><i style={icon} className="fa-brands fa-linkedin"></i></a>
                            <a target={"_blank"} href="https://github.com/vicentefiguer0a"><i style={icon} className="fa-brands fa-github"></i></a>
                            <a target={"_blank"} href="https://alumni.codeup.com/students/1664"><i style={icon} className="fa-solid fa-envelope"></i></a>
                        </Card.Text>

                    </Card.Body>
                </Card>

            </div>

        </div>
    );
}

const aboutPage = {
  display: 'grid',
  width: '100%',
};
const aboutContent = {
  gridColumn: 1,
  gridRow: 1,
  margin: '0 auto',
  width: '80%',
  textAlign: 'center',
};

const Developer = {
  display: 'flex',
  alignItems: 'center',
};

const icon = {
  margin: '5px',
  fontSize: '25px',
};

// const iconDisplay = {
//     alignItems: 'center',
//     // justifyContent: 'center'
// }

// const aboutImage1={
//     gridColumn: 1,
//     gridRow: 2,
//     display: 'flex',
//     margin: '5px auto',
//     width: '80vw',
//     justifyContent: 'center',
//     justifyItems:'center',
//     alignContent: 'center',
//     alignItems: 'center'
// }
// const aboutImage2={
//     gridColumn: 1,
//     gridRow: 3,
//     display: 'flex',
//     margin: '5px auto',
//     width: '80vw',
//     justifyContent: 'center',
//     justifyItems:'center',
//     alignContent: 'center',
//     alignItems: 'center'
// }
// const aboutImage3={
//     gridColumn: 1,
//     gridRow: 4,
//     display: 'flex',
//     margin: '5px auto',
//     width: '80vw',
//     justifyContent: 'center',
//     justifyItems:'center',
//     alignContent: 'center',
//     alignItems: 'center'
// }
// const image={
//     height: '70%',
//     width: '70%',
// }
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
