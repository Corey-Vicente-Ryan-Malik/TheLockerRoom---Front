import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GameDisplay from '../displayFolder/GameDisplay';
import TeamDisplay from '../displayFolder/TeamDisplay';
import Landing from '../displayFolder/LandingDisplay';
import NewsDisplay from '../displayFolder/NewsDisplay';
import HomeDisplay from '../displayFolder/HomeDisplay';
import Register from '../settings/Register';
import CreatePost from '../forum/CreatePost';
import EditPost from '../forum/EditPost';
import Forum from '../forum/Forum';
import authService from '../services/auth.service';
import About from './About';
import Error from '../settings/Error';

export default function Navbar() {
  const currentUser = authService.getCurrentUser();

  const [team, setTeam] = useState({
    favoriteTeam: '',
  });

  const { favoriteTeam } = team;
  console.log(team);
  const onInputChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const logOut = (e) => {
    e.preventDefault();
    authService.logout();
  };
  return (
    <React.Fragment>
      <Router>
        <div className="Navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
            <Link to={'/home'} className="navbar-brand">
              The Locker Room
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                {currentUser && (
                  <li className="nav-item">
                    <Link to={'/forum'} id="forum" className="nav-link">
                      Forum
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  <Link to={'/teams'} id="teams" className="nav-link">
                    Team Information
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/schedules'} id="schedules" className="nav-link">
                    Weekly Schedules
                  </Link>
                </li>
              </ul>
              <div className="d-flex my-2 my-lg-0 ms-auto">
                <select name="favoriteTeam" onChange={(e) => onInputChange(e)}>
                  {/*<option defaultValue="Select Your Favorite Team">*/}
                  {/*  Select Your Favorite Team*/}
                  {/*</option>*/}
                  <option value="San Fransisco 49ers">
                    San Fransisco 49ers
                  </option>
                  <option value="Chicago Bears">Chicago Bears</option>
                  <option value="Cincinnati Bengals">Cincinnati Bengals</option>
                  <option value="Buffalo Bills">Buffalo Bills</option>
                  <option value="Denver Broncos">Denver Broncos</option>
                  <option value="Cleveland Browns">Cleveland Browns</option>
                  <option value="Tampa Bay Buccaneers">
                    Tampa Bay Buccaneers
                  </option>
                  <option value="Arizona Cardinals">Arizona Cardinals</option>
                  <option value="Los Angeles Chargers">
                    Los Angeles Chargers
                  </option>
                  <option value="Kansas City Chiefs">Kansas City Chiefs</option>
                  <option value="Indianapolis Colts">Indianapolis Colts</option>
                  <option value="Washington Commanders">
                    Washington Commanders
                  </option>
                  <option value="Dallas Cowboys">Dallas Cowboys</option>
                  <option value="Miami Dolphins">Miami Dolphins</option>
                  <option value="Philadelphia Eagles">
                    Philadelphia Eagles
                  </option>
                  <option value="Atlanta Falcons">Atlanta Falcons</option>
                  <option value="New York Giants">New York Giants</option>
                  <option value="Jacksonville Jaguars">
                    Jacksonville Jaguars
                  </option>
                  <option value="New York Jets">New York Jets</option>
                  <option value="Detroit Lions">Detroit Lions</option>
                  <option value="Green Bay Packers">Green Bay Packers</option>
                  <option value="Carolina Panthers">Carolina Panthers</option>
                  <option value="New England Patriots">
                    New England Patriots
                  </option>
                  <option value="Las Vegas Raiders">Las Vegas Raiders</option>
                  <option value="Los Angeles Rams">Los Angeles Rams</option>
                  <option value="Baltimore ravens">Baltimore Ravens</option>
                  <option value="New Orleans Saints">New Orleans Saints</option>
                  <option value="Seattle Seahawks">Seattle Seahawks</option>
                  <option value="Pittsburgh Steelers">
                    {' '}
                    Pittsburgh Steelers
                  </option>
                  <option value="Houston Texans">Houston Texans</option>
                  <option value="Tennessee Titans">Tennessee Titans</option>
                  <option value="Minnesota Vikings">Minnesota Vikings</option>
                </select>
              </div>

              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    to={'/lockerrm-front/src/components/Navbar#'}
                    id="navbarDropdownMenuLink"
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-user-gear"></i>
                  </Link>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    {currentUser && (
                      <li>
                        <Link to={'/edit'} id="edit" className="dropdown-item">
                          Edit Profile
                        </Link>
                      </li>
                    )}
                    {currentUser && (
                      <li>
                        <Link
                          to={'/Settings'}
                          id="settings"
                          className="dropdown-item"
                        >
                          Settings
                        </Link>
                      </li>
                    )}
                    {currentUser ? (
                      <li>
                        <Link
                          to={'/'}
                          className="dropdown-item"
                          onClick={logOut}
                        >
                          Logout
                        </Link>
                      </li>
                    ) : (
                      <li>
                        <Link to={'/'} className="dropdown-item">
                          Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/home" element={<HomeDisplay />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<HomeDisplay />} />
          <Route path="/schedules" element={<GameDisplay />} />
          <Route path="/teams" element={<TeamDisplay />} />
          <Route path="/news" element={<NewsDisplay />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
