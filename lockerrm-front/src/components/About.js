import about1 from '../images/CO2.JPG';
import about2 from '../images/RH.jpeg';
import about3 from '../images/MW.JPG';
import about4 from '../images/VF2.jpeg';
import icon1 from '../images/codeup.jpg';
import '../StyleFolder/About.css';
import React from 'react';
import { Card } from 'react-bootstrap';

export default function About() {
  return (
    <div id={aboutPage} style={aboutPage}>
      <h1 style={devHeader}>Meet The Developers!</h1>
      <div id="Developer" className="Developer" style={Developer}>
        <Card style={devCard} id="devCard">
          <Card.Img variant="top" src={about1} />
          <Card.Body>
            <Card.Title>Corey Osbey</Card.Title>
            <Card.Text style={cardIcon}>
              <a
                target={'_blank'}
                href="https://www.linkedin.com/in/coreyosbey/"
              >
                {' '}
                <i style={icon} className="fa-brands fa-linkedin"></i>
              </a>
              <a target={'_blank'} href="https://github.com/Cosbey1 ">
                <i style={icon} className="fa-brands fa-github"></i>
              </a>
              <a
                target={'_blank'}
                href="https://alumni.codeup.com/students/1669"
              >
                <i style={icon}>
                  <img style={codeLogo} src={icon1} />
                </i>
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={devCard} className="devCard">
          <Card.Img variant="top" src={about2} />
          <Card.Body>
            <Card.Title>Ryan Harris</Card.Title>
            <Card.Text style={cardIcon}>
              <a
                target={'_blank'}
                href="https://www.linkedin.com/in/ryantharris/ "
              >
                <i style={icon} className="fa-brands fa-linkedin"></i>
              </a>
              <a target={'_blank'} href="https://github.com/ryant67 ">
                <i style={icon} className="fa-brands fa-github"></i>
              </a>
              <a
                target={'_blank'}
                href="https://alumni.codeup.com/students/1657"
              >
                <i style={icon}>
                  <img style={codeLogo} src={icon1} />
                </i>
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={devCard}>
          <Card.Img variant="top" src={about3} />
          <Card.Body>
            <Card.Title>Malik Willis</Card.Title>
            <Card.Text style={cardIcon}>
              <a
                target={'_blank'}
                href="https://www.linkedin.com/in/malik-willis-71778924a/"
              >
                <i style={icon} className="fa-brands fa-linkedin"></i>
              </a>
              <a target={'_blank'} href="https://github.com/Leek995">
                <i style={icon} className="fa-brands fa-github"></i>
              </a>
              <a
                target={'_blank'}
                href="https://alumni.codeup.com/students/1660"
              >
                <i style={icon}>
                  <img style={codeLogo} src={icon1} />
                </i>
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={devCard}>
          <Card.Img variant="top" src={about4} />
          <Card.Body>
            <Card.Title>Vicente Figueroa</Card.Title>
            <Card.Text style={cardIcon}>
              <a
                target={'_blank'}
                href="https://www.linkedin.com/in/vicentefigueroa-dev/"
              >
                <i style={icon} className="fa-brands fa-linkedin"></i>
              </a>
              <a target={'_blank'} href="https://github.com/vicentefiguer0a">
                <i style={icon} className="fa-brands fa-github"></i>
              </a>
              <a
                target={'_blank'}
                href="https://alumni.codeup.com/students/1664"
              >
                <i style={icon}>
                  <img style={codeLogo} src={icon1} />
                </i>
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={aboutContent}>
        <h1>Team United. Strength in Unity !</h1>
        <p>
          In The Locker Room, there is an aura that revolves around the world of
          football, and our goal is to fuel that fire by creating a space where
          all football fans can come together and share our love for the sport!
          Here fans from all 32 teams can share every moment of triumph,
          heartbreak, and everything in between. We have created a space that
          serves as a midpoint between major sports platforms and social media
          where you can react to real time events without having to go to social
          media to comment. The Locker Room gives all of its users quick access
          to all game and team information without all of the unnecessary ads.
        </p>
      </div>
    </div>
  );
}

const aboutPage = {
  display: 'grid',
  margin: '15px',
};
const aboutContent = {
  margin: '0 auto',
  width: '80%',
  textAlign: 'center',
};
const Developer = {
  display: 'flex',
  alignItems: 'center',
  margin: 'auto',
};
const devCard = {
  width: '18rem',
  margin: '15px',
};
const icon = {
  margin: '15px',
  fontSize: '25px',
  color: 'black',
};
const cardIcon = {
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
};
const codeLogo = {
  width: '30px',
  height: '30px',
};
const devHeader = {
  margin: 'auto',
};
