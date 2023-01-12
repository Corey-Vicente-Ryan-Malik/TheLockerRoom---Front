import logo from '../images/logo.jpeg';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import '../StyleFolder/LandingDisplay.css';

import validation from './validation';

import authService from '../services/auth.service';

const Landing = (props, {}) => {
  const navigate = useNavigate();
  const onClick = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const [errors, setErrors] = useState({});
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
    setErrors(validation(user));
    if (errors) {
      navigate('/');
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
        <img
          style={{
            height: '150px',
            width: '150px',
            marginTop: '2rem',
            marginBottom: '1rem',
          }}
          className="IMG"
          src={logo}
        />
        <p
          style={{ marginTop: '1rem', textAlign: 'center' }}
          className="message"
        >
          Welcome to The Locker Room!
          <br />
          Where you can access all of the latest NFL news, scores, stats, and
          more.
          <br />
          <br />
          Login to get the scoop on your favorite and least favorite teams.
          <br />
        </p>
      </div>
      <div className="formContainer">
        <form className="formDiv">
          <h2 className="formTitle">Login</h2>
          <div className="usernameContainer">
            <div className="inputDiv">
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
              <p>
                {errors.password && <p className="error">{errors.password}</p>}
              </p>
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
            <button
              type="button"
              id="landingButton"
              className="btn btn-dark"
              onClick={(e) => sendLoginRequest()}
            >
              Login
            </button>
            <button
              type="button"
              id="landingButton2"
              className="btn btn-dark"
              onClick={onClick}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Landing;
