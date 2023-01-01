import about1 from '../images/about1.jpeg';
import about2 from '../images/about2.jpeg';
import about3 from '../images/about3.jpeg';

export default function About (){

        return (
            <div className="About">
                <div>
                    <h1>Team United. Strength in Unity !</h1>

                    <p>
                        In The Locker Room, there is an aura that revolves around the world of football, and our goal is to fuel that fire by creating a space where all football fans can come together and share our love for the sport! Here fans from all 32 teams can share every moment of triumph, heartbreak, and everything in between. Our dedication to giving our users the most up-to-date news and an environment where everyone can enjoy our platform is our top priority!
                    </p>
                </div>

                <div>
                    <img className="about1" style={About1} src={about1}/>
                </div>

                <div>
                    <img className="about2" style={About2} src={about2}/>
                </div>

                <div>
                    <img className="about3" style={About3} src={about3}/>
                </div>
            </div>
        );
    }

const About1 = {
    // gridColumn: 1,
    // gridRow: 1,
    margin: '0 auto',
    width: '700px',
    height: '700px',
    // display: 'flex',
    // justifyContent: 'center',
    // justifyItems: 'center',
    // alignItems: 'center',
}

const About2 ={
    margin: '0 auto',
    width: '700px',
    height: '700px',
}

const About3 ={
    margin: '0 auto',
    width: '700px',
    height: '700px',
}
