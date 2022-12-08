import PropTypes from 'prop-types';
import React from 'react';

const Landing = ( props ) => {

    const onClick = (e) => {
        e.preventDefault();
        console.log("Click Check.")
    }

// Team List GET Request ------------------------
// const options = {
// 	method: 'GET',
// 	headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
//     'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com'
//   }
// };

// fetch('https://nfl-api1.p.rapidapi.com/nflteamlist', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



// Team GET Request ------------------------------
// const options = {
// 	method: 'GET',
// 	headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
//     'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com'
//   }
// };

// fetch('https://nfl-api1.p.rapidapi.com/nflteamplayers?teamid=16', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

//Schedule GET Request ----------------------------
const options = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_NFLAPI_KEY,
    'X-RapidAPI-Host': 'nfl-api1.p.rapidapi.com'
  }
};

fetch('https://nfl-api1.p.rapidapi.com/nflschedule?year=2022&month=12&day=30', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));




    return (

        <div className="landingPage" style={landingPage}>

            <div className="landingInfo" style={landingInfo}>
                <h1 style={header}>{props.header}</h1>
                <p style={message}>{props.message}</p>
            </div>

            <div className="landingForm" style={landingForm}>
                <input type="text" className="username" placeholder="Username" style={usernameForm}/>

                <input type="password" className="password" placeholder="Password" style={passwordForm}/>

                <button style={loginBtn} onClick={onClick}>Log-In</button>

                <a href="#" style={forgotPassword}>Forgot Password?</a>

                <button style={registerBtn} onClick={onClick}>Create New Account?</button>
            </div>

        </div>

    )
}

Landing.defaultProps = {
    header: 'Main Welcome Header...(x)',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime quo voluptas consectetur corporis, mollitia reprehenderit eveniet totam expedita impedit voluptate asperiores accusamus suscipit doloribus fugit deserunt placeat ipsa amet!',
}

Landing.propTypes = {
    message: PropTypes.string.isRequired
}

//Landing Page styling 
const landingPage = {
    display: 'flex',
    margin: 'auto',
    width: '95vw',
    height: '95vh',
}

//Landing Info styling
const landingInfo = {
    display: 'grid',
    margin: 'auto',
    border: 'solid black',
    borderRadius: '15px',
    width: '40%',
    height: '60%'
}
const header = {
    gridColumn: 1,
    gridRow: 1,
    margin: 'auto',
    width: '85%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
}
const message = {
    gridColumn: 1,
    gridRow: 2,
    margin: 'auto',
    width: '85%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
}

//Landing Form styling
const landingForm = { 
    display: 'grid',
    margin: 'auto',
    border: 'solid black',
    borderRadius: '15px',
    width: '40%',
    height: '60%',
}
const usernameForm = {
    gridColumn: 1,
    gridRow: 1,
    margin: 'auto',
    width: '85%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    borderRadius: '10px',
}
const passwordForm = {
    gridColumn: 1,
    gridRow: 2,
    margin: 'auto',
    width: '85%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    borderRadius: '10px'
}
const loginBtn = {
    gridColumn: 1,
    gridRow: 3,
    margin: 'auto',
    width: '85%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: '10px'
}
const registerBtn = {
    gridColumn: 1,
    gridRow: 4,
    margin: 'auto',
    width: '50%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: '10px'
}
const forgotPassword = {
    gridColumn: 1,
    gridRow: 5,
    margin: 'auto',
    width: '50%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
}

export default Landing