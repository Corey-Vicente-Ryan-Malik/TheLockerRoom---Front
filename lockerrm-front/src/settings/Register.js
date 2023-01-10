import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import registerValidation from './registerValidation';
import './registerValidation';
import './RegisterStyles.css';

const Register = (props, {}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    favoriteTeam: '',
  });
  const [errors, setErrors] = useState({});
  const {
    firstname,
    lastname,
    email,
    username,
    password,
    favoriteTeam,
    confirmPassword,
  } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors(registerValidation(user));
    if (errors) {
      navigate('/register');
    }
      await axios.post('https://lockerrm.us:8080/register', user);
      navigate('/');
      console.log(user);

  };

  return (
    <div className="RegisterPage">
      <div className="Edit form">
        <h1 className="formTitle">Create Account</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="inputContainer">
            <label htmlFor="firstname"></label>
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            <input
              className="inputBox"
              // className="firstNameInput"
              id="firstname"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstname}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lastname"></label>
            {errors.lastName && <p className="error">{errors.lastName}</p>}
            <input
              className="inputBox"
              id="lastname"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastname}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="email"></label>
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              className="inputBox"
              id="email"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="username"></label>
            {errors.username && <p className="error">{errors.username}</p>}
            <input
              className="inputBox"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="favoriteTeam"></label>
            {errors.favoriteTeam && (
              <p className="error">{errors.favoriteTeam}</p>
            )}
            <select
              className="inputBox"
              id="favoriteTeam"
              name="favoriteTeam"
              // value={favoriteTeam}
              onChange={(e) => onInputChange(e)}
              required
            >
              <option>Select Your Favorite Team</option>
              <option value="25">San Francisco 49ers</option>
              <option value="3">Chicago Bears</option>
              <option value="4">Cincinnati Bengals</option>
              <option value="2">Buffalo Bills</option>
              <option value="7">Denver Broncos</option>
              <option value="5">Cleveland Browns</option>
              <option value="27">Tampa Bay Buccaneers</option>
              <option value="22">Arizona Cardinals</option>
              <option value="24">Los Angeles Chargers</option>
              <option value="12">Kansas City Chiefs</option>
              <option value="11">Indianapolis Colts</option>
              <option value="28">Washington Commanders</option>
              <option value="6">Dallas Cowboys</option>
              <option value="15">Miami Dolphins</option>
              <option value="21">Philadelphia Eagles</option>
              <option value="1">Atlanta Falcons</option>
              <option value="19">New York Giants</option>
              <option value="30">Jacksonville Jaguars</option>
              <option value="20">New York Jets</option>
              <option value="8">Detroit Lions</option>
              <option value="9">Green Bay Packers</option>
              <option value="29">Carolina Panthers</option>
              <option value="17">New England Patriots</option>
              <option value="13">Las Vegas Raiders</option>
              <option value="14">Los Angeles Rams</option>
              <option value="33">Baltimore Ravens</option>
              <option value="18">New Orleans Saints</option>
              <option value="26">Seattle Seahawks</option>
              <option value="23">Pittsburgh Steelers</option>
              <option value="34">Houston Texans</option>
              <option value="10">Tennessee Titans</option>
              <option value="16">Minnesota Vikings</option>
            </select>
          </div>

          <div className="inputContainer">
            <label htmlFor="password"></label>
            {errors.password && <p className="error">{errors.password}</p>}
            <input
              className="inputBox"
              id="password"
              placeholder=" Enter Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="inputContainer">
            <label htmlFor="confirmPassword"></label>
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
            <input
              className="inputBox"
              id="confirmPassword"
              placeholder=" Re-enter Password"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button
            type="button"
            id="buttonBox"
            className="btn btn-primary"
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

// const RegisterPage = {
//   display: 'flex',
//   margin: '50px auto',
//   width: '95vw',
//   height: '95vh',
// };
//
// const RegisterForm = {
//   display: 'grid',
//   margin: '50px auto',
//   border: 'solid black',
//   borderRadius: '15px',
//   width: '60%',
//   height: '60%',
// };
//
// const firstName = {
//   gridColumn: 1,
//   gridRow: 1,
//   margin: '10px auto',
//   width: '90%',
//   display: 'flex',
//   justifyContent: 'center',
//   justifyItems: 'center',
//   alignItems: 'center',
//   padding: '5px',
//   borderRadius: '10px',
// };
//
// const lastName = {
//   gridColumn: 1,
//   gridRow: 2,
//   margin: '10px auto',
//   width: '90%',
//   display: 'flex',
//   justifyContent: 'center',
//   justifyItems: 'center',
//   alignItems: 'center',
//   padding: '5px',
//   borderRadius: '10px',
// };
//
// const Email = {
//   gridColumn: 1,
//   gridRow: 3,
//   margin: '10px auto',
//   width: '90%',
//   display: 'flex',
//   justifyContent: 'center',
//   justifyItems: 'center',
//   alignItems: 'center',
//   padding: '5px',
//   borderRadius: '10px',
// };
//
// const Username = {
//   gridColumn: 1,
//   gridRow: 4,
//   margin: '10px auto',
//   width: '90%',
//   display: 'flex',
//   justifyContent: 'center',
//   justifyItems: 'center',
//   alignItems: 'center',
//   padding: '5px',
//   borderRadius: '10px',
// };
//
// const FavoriteTeam = {
//   gridColumn: 1,
//   gridRow: 5,
//   margin: '10px auto',
//   width: '90%',
//   display: 'flex',
//   justifyContent: 'center',
//   justifyItems: 'center',
//   alignItems: 'center',
//   padding: '5px',
//   borderRadius: '10px',
// };
//
// const Password = {
//   gridColumn: 1,
//   gridRow: 6,
//   margin: '10px auto',
//   width: '90%',
//   display: 'flex',
//   justifyContent: 'center',
//   justifyItems: 'center',
//   alignItems: 'center',
//   padding: '5px',
//   borderRadius: '10px',
// };
//
// const ConfirmPass = {
//   gridColumn: 1,
//   gridRow: 7,
//   margin: '10px auto',
//   width: '90%',
//   display: 'flex',
//   justifyContent: 'center',
//   justifyItems: 'center',
//   alignItems: 'center',
//   padding: '5px',
//   border: 'solid black',
//   borderRadius: '15px',
// };
//
// const SaveButton = {
//   gridColumn: 1,
//   gridRow: 8,
//   margin: '10px auto',
//   width: '60%',
//   display: 'flex',
//   justifyContent: 'center',
//   justifyItems: 'center',
//   alignItems: 'center',
//   padding: '5px',
//   borderRadius: '10px',
// };

export default Register;
