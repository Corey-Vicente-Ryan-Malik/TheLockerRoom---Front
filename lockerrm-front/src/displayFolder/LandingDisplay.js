import PropTypes from 'prop-types';
import logo from '../images/logo.jpeg';
import { Redirect, Route, useNavigate } from 'react-router-dom';
import '../index.css';
import { useEffect, useRef, useState, useContext } from 'react';
import React from 'react';
import axios from 'axios';
import "./LandingDisplay.css";

import validation from './validation';

import authService from '../services/auth.service';

const Landing = (props, {}) => {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const [errors, setErrors] = useState({

  });
  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const [user, setUser] = useState({
    username: '',
    password: '',
    grant_type: 'password',
  });
  const { username, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  async function sendLoginRequest() {
    setErrors(validation(user))
    if(errors){
      navigate("/")

      // setErrMsg("**Invalid Username or Password")
    }
    await authService.login(
        user.username,
        user.password,
        user.grant_type,
        user
    );
    if (localStorage.getItem('access_token')) {
      const API = 'http://localhost:8080/user/';
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      };
      await fetch(API, options)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data));
          });
      navigate('/home');
      window.location.reload(true);
    }
  }

  return (
      <div className="Landing">
        <div className="logoContainer">
          <img style={{height: "150px", width: "150px", marginTop: "2rem", marginBottom: "1rem"}} className="IMG" src={logo}/>
          <p style={{marginTop: "1rem", textAlign: "center"}} className="message">
            Welcome to The Locker Room!<br />
            Where you can access all of the latest NFL news, scores , stats, and more.<br /><br />
            Login to get the scoop on your favorite and least favorite teams.<br />
          </p>
        </div>
        <div className="formContainer">
          <form className="formDiv">
            <h2 className="formTitle">Login</h2>
            <div className="usernameContainer">
              <div className="inputDiv">
                {/*<label htmlFor="username">Username</label>*/}
                {/*<p></p>*/}
                <p className="error">{errMsg}</p>
                {errors.username && <p className="error">{errors.username} </p>}
                <input
                    className="inputBox2"
                    name="username"
                    ref={userRef}
                    required
                    placeholder="Username"
                    type="text"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                />

              </div>

            </div>
            <div className="passwordContainer">
              <div className="inputDiv2">
                <p>{errors.password && <p className="error">{errors.password}</p>}</p>
                {/*<label htmlFor="password">Password</label>*/}
                <input
                    name="password"
                    ref={userRef}
                    required
                    className="inputBox2"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => onInputChange(e)}
                />

              </div>
            </div>
            <div className="buttonContainer">
              <button type="button" id="landingButton" className="btn btn-dark" onClick={(e) => sendLoginRequest()}>Login</button>
              <button type="button" id="landingButton2" className="btn btn-dark" onClick={onClick}>Create Account</button>
            </div>

          </form>
        </div>
      </div>
  );
};


//Landing Info styling
const landingInfo = {
  display: 'grid',
  margin: 'auto',
  // border: 'solid black',
  // borderRadius: '15px',
  width: '40%',
  height: '90%',
};
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
};
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
};

//Landing Form styling
const landingForm = {
  display: 'grid',
  margin: 'auto',
  border: 'solid black',
  borderRadius: '15px',
  width: '40%',
  height: '60%',
};
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
};
const passwordForm = {
  gridColumn: 1,
  gridRow: 2,
  margin: 'auto',
  width: '85%',
  height: '50%',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  borderRadius: '10px',
};
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
  borderRadius: '10px',
};
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
  borderRadius: '10px',
};
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
};

export default Landing;
