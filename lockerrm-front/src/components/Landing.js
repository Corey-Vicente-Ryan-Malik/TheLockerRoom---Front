import PropTypes from 'prop-types';
import logo from '../logo.jpeg';
import {Redirect, Route, useNavigate} from 'react-router-dom';
import '../index.css';
import {useEffect, useRef, useState, useContext} from "react";
import AuthContext from "../context/AuthProvider";
import React from "react";
import axios from "axios";
import login from "./Login";
import authService from "../services/auth.service";


const Landing = ( props, {} ) => {
    const navigate = useNavigate();
    const onClick = (e) => {
        e.preventDefault();
        navigate('/register');
        console.log("Click Check.");

    }
    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)
    useEffect(() =>{
        userRef.current.focus();
    },[])

    // values from form
    const [user, setUser] = useState({
        username: "",
        password: "",
        grant_type: 'password'
    });
    // init variable
    const {username, password} = user;
    const onInputChange = (e) => {
        // grabs value
        setUser({...user, [e.target.name]: e.target.value});
    }
    async function sendLoginRequest() {
        await authService.login(user.username, user.password, user.grant_type, user);
        if(localStorage.getItem("access_token")){
            navigate("/home");
        }else {
            navigate("/");
        }

    }

    return (
                <div className="landingPage" >
                    <div className="landingInfo" style={landingInfo}>
                        <img className="landLogo" style={landLogo} src={logo}/>
                        <p className="message" style={message}>{props.message}</p>
                    </div>
                    <div className="landingForm">
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        {/*<label htmlFor="username">Username</label>*/}
                        <input type="text"
                               className="username"
                               value={username}
                               name="username"
                               placeholder="Username"
                               style={usernameForm}
                               onChange={(e)=>onInputChange(e)}
                               ref={userRef}
                               required/>

                        {/*<label htmlFor="password">Password</label>*/}
                        <input type="password"
                               className="password"
                               value={password}
                               name="password"
                               placeholder="Password"
                               style={passwordForm}
                               onChange={(e)=>onInputChange(e)}
                               ref={userRef}
                               required/>

                        <button style={loginBtn} type="button" onClick={(e)=>sendLoginRequest()}>Log-In</button>

                        <a href="#" style={forgotPassword}>Forgot Password?</a>

                        <button className="registerBtn" style={registerBtn} onClick={onClick}>Create New Account?</button>
                    </div>
                </div>

    )
}

Landing.defaultProps = {
    message: 'Welcome to the Locker Room ! Where you can access all of the latest news, scores , stats,  and more all from your personal device without all of the unnecessary ads! Please log in to get the scoop on your favorite teams.'
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