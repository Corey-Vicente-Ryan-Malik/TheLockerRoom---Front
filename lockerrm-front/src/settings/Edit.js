import React, { useState } from 'react';
import authService from '../services/auth.service';

export default function Edit() {
  const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [favTeam, setFavTeam] = useState('');

  const loggedInUser = authService.getCurrentUser();
  // console.log(loggedInUser);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };
  const handleFirstChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastChange = (e) => {
    setLastName(e.target.value);
  };
  const handleFavTeamChange = (e) => {
    setFavTeam(e.target.value);
  };
  const submitChange = () => {
    let User = {
      id: loggedInUser.id,
      role: loggedInUser.role,
      email: loggedInUser.email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      // password: password,
      favoriteTeam: favTeam,
    };
    // console.log(User);
    const API = `http://localhost:8080/users/${loggedInUser.id}/edit-profile`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
      body: JSON.stringify(User),
    };
    fetch(API, options).then((response) => console.log(response.data));
  };

  const edit = {
    display: 'grid',
    width: '50%',
    height: '50%',
    margin: 'auto',
    gridColumn: 1,
    gridRow: 1,
    textAlign: 'center',
  };

  return (
    <div style={edit}>
      <h1>Hello New Edit Form</h1>
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        onBlur={handleFirstChange}
      />
      <br />
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        onBlur={handleLastChange}
      />
      <br />
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        onBlur={handleUsernameChange}
      />
      <br />
      {/* <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        onBlur={handlePasswordChange}
      />
      <br /> */}
      <select name="favoriteTeam" onBlur={handleFavTeamChange}>
        <option name="favoriteOption">Change Your Favorite Team?</option>
        <option name="favoriteOption" value="1">
          Atlanta Falcons
        </option>
        <option name="favoriteOption" value="2">
          Buffalo Bills
        </option>
        <option name="favoriteOption" value="3">
          Chicago Bears
        </option>
        <option name="favoriteOption" value="4">
          Cincinnati Bengals
        </option>
        <option name="favoriteOption" value="5">
          Cleveland Browns
        </option>
        <option name="favoriteOption" value="6">
          Dallas Cowboys
        </option>
        <option name="favoriteOption" value="7">
          Denver Broncos
        </option>
        <option name="favoriteOption" value="8">
          Detroit Lions
        </option>
        <option name="favoriteOption" value="9">
          Green Bay Packers
        </option>
        <option name="favoriteOption" value="10">
          Tennessee Titans
        </option>
        <option name="favoriteOption" value="11">
          Indianapolis Colts
        </option>
        <option name="favoriteOption" value="12">
          Kansas City Chiefs
        </option>
        <option name="favoriteOption" value="13">
          Las Vegas Raiders
        </option>
        <option name="favoriteOption" value="14">
          Los Angeles Rams
        </option>
        <option name="favoriteOption" value="15">
          Miami Dolphins
        </option>
        <option name="favoriteOption" value="16">
          Minnesota Vikings
        </option>
        <option name="favoriteOption" value="17">
          New England Patriots
        </option>
        <option name="favoriteOption" value="18">
          New Orleans Saints
        </option>
        <option name="favoriteOption" value="19">
          New York Giants
        </option>
        <option name="favoriteOption" value="20">
          New York Jets
        </option>
        <option name="favoriteOption" value="21">
          Philadelphia Eagles
        </option>
        <option name="favoriteOption" value="22">
          Arizona Cardinals
        </option>
        <option name="favoriteOption" value="23">
          Pittsburgh Steelers
        </option>
        <option name="favoriteOption" value="24">
          Los Angeles Chargers
        </option>
        <option name="favoriteOption" value="25">
          San Fransisco 49ers
        </option>
        <option name="favoriteOption" value="26">
          Seattle Seahawks
        </option>
        <option name="favoriteOption" value="27">
          Tampa Bay Buccaneers
        </option>
        <option name="favoriteOption" value="28">
          Washington Commanders
        </option>
        <option name="favoriteOption" value="29">
          Carolina Panthers
        </option>
        <option name="favoriteOption" value="30">
          Jacksonville Jaguars
        </option>
        <option name="favoriteOption" value="33">
          Baltimore Ravens
        </option>
        <option name="favoriteOption" value="34">
          Houston Texans
        </option>
      </select>
      <br />
      <button onClick={submitChange}>Submit Changes</button>
      <br />
    </div>
  );
}
