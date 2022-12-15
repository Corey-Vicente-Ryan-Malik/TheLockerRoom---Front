import PropTypes from 'prop-types';
import logo from '../logo.jpeg';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import {useState} from "react";




// const login = async () => {
//     console.log("attempting to log in..")
//     let obj = {
//         username: username.value,
//         password: password.value,
//         grant_type: 'password'
//     }




const Landing = ( props, {} ) => {
    const navigate = useNavigate();
    const onClick = (e) => {
        e.preventDefault();
        navigate('/register');
        console.log("Click Check.");
    }



    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const {username, password} = user;

    function sendLoginRequest() {
        console.log("sending request")

        // const [jwt, setJwt] = useLocateState("", jwt);

        // await fetch("https://lockerrm.us:8080/oauth/token", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Authorization': 'Basic ' + btoa('sports-app-client:secret')
        //     },
        //     body: `grant_type=${obj.grant_type}&username=${user.username}&password=${user.password}&client_id=sports-app-client`
        // }).then(data => data.json()).then(data => {
        //     if (data.access_token) {
        //         console.log("storing token...")
        //         localStorage.setItem('access_token', data.access_token)
        //     }
        //     if (data.refresh_token) {
        //         localStorage.setItem("refresh_token", data.refresh_token);
        //         console.log("Refresh token set")
        //     }
        // })
    }

    return (

        <div className="landingPage" >
            <div className="landingInfo" style={landingInfo}>
                <img className="landLogo" style={landLogo} src={logo}/>
                <p className="message" style={message}>{props.message}</p>
            </div>

            <div className="landingForm">
                <label htmlFor="username">Username</label>
                <input type="text" className="username" value={username} placeholder="Username" style={usernameForm} onChange={(e)=>setUser({...user, [e.target.name]: e.target.value})}/>

                <label htmlFor="password">Password</label>
                <input type="password" className="password"  value={password} placeholder="Password" style={passwordForm} onChange={(e)=>setUser({...user, [e.target.name]: e.target.value})}/>

                <button style={loginBtn} type="button" onClick={(e)=>sendLoginRequest()}>Log-In</button>

                <a href="#" style={forgotPassword}>Forgot Password?</a>

                <button className="registerBtn" style={registerBtn} onClick={onClick}>Create New Account?</button>
            </div>

        </div>

    )
}

Landing.defaultProps = {
    message: 'Welcome to the Locker room ! Where you can access all of the latest news, scores , stats,  and more all from your personal device ! Please log in to get the scoop on your favorite teams.'
}

Landing.propTypes = {
    message: PropTypes.string.isRequired
}

//Landing Page styling
// const landingPage = {
//     display: 'flex',
//     margin: 'auto',
//     width: '95vw',
//     height: '95vh',
// }

//Landing Info styling
const landingInfo = {
    display: 'grid',
    margin: 'auto',
    // border: 'solid black',
    // borderRadius: '15px',
    width: '40%',
    height: '90%'
}
const landLogo = {
    gridColumn: 1,
    gridRow: 1,
    margin: '0 auto',
    width: '85%',
    height: '80%',
    // display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
}
const message = {
    gridColumn: 1,
    gridRow: 2,
    margin: '0 auto',
    width: '85%',
    height: '50%',
    // display: 'flex',
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
    // width: '50%',
    // height: '50%',
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

export default Landing;