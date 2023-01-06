import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Edit() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [favTeam, setFavTeam] = useState('');

  const navigate = useNavigate();

  const loggedInUser = authService.getCurrentUser();

  const handleUsernameChange = (e) => {
    if(e.target.value === '') {
      setUsername(loggedInUser.username);
    } else {
      setUsername(e.target.value);
    }
  };

  const handleFirstChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastChange = (e) => {
    setLastName(e.target.value);
  };

  const handleFavTeamChange = (e) => {
    if (e.target.value === null || e.target.value === undefined) {
      setFavTeam(6)
    } else {
      setFavTeam(e.target.value);
    }
  };

  const submitChange = () => {
    const User = {
      id: loggedInUser.id,
      role: loggedInUser.role,
      email: loggedInUser.email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: loggedInUser.password,
      favoriteTeam: favTeam,
    };

    const API = "http://localhost:8080/users/" + loggedInUser.id + "/edit-profile";
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(User),
    };

    if (User.username.length > 20) {
      alert("Error: username cannot be longer than 20 letters.\nPlease try again.");
    }

    fetch(API, options)
    .then(navigate("/home"))
    .catch((err) => (console.log(err)));
  };

  const handleDelete = () => {
    const answer = window.confirm("Are you sure you want to delete your profile?\nTHIS ACTION IS IRREVERSABLE.");

    const DELETE_API = "http://localhost:8080/users/" + loggedInUser.id + "/delete-profile";
    const headerOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("access_token"),
      },
      body: JSON.stringify(loggedInUser),
    };

    if (answer) {
      fetch(DELETE_API, headerOptions)
      .then(() => {
        localStorage.clear();
        navigate("/")
      })
      .catch((err) => {alert(err)})
    }

  }

  return (
    <div>
      <h1 style={{marginTop: "1rem", marginLeft: "12rem", marginBottom: "1rem"}}>Welcome @{loggedInUser.username}</h1>

      <Form style={{width: "40%",  margin: "auto"}}>
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          id="firstName"
          name="firstName"
          placeholder={loggedInUser.firstName}
          onBlur={handleFirstChange}
        />

        <br />

        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          id="lastName"
          name="lastName"
          placeholder={loggedInUser.lastName}
          onBlur={handleLastChange}
        />

        <br />

        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          id="username"
          name="username"
          placeholder={loggedInUser.username}
          onBlur={handleUsernameChange}
        />

        <br />

        <Form.Label>Favorite Team</Form.Label>
        <Form.Select name="favoriteTeam" onBlur={handleFavTeamChange}>
          <option name="favoriteOption">Select Your Favorite Team</option>
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
        </Form.Select>
        <br />
        <Button variant="outline-success" onClick={submitChange}>Edit Profile</Button>
        <br />
      </Form>
      <Button variant="danger" onClick={handleDelete}>DELETE PROFILE</Button>
    </div>
  );
}