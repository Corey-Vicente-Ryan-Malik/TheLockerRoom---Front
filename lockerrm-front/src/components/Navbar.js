import React, { useState } from 'react';
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
import About from './About';
import Error from '../settings/Error';
import Edit from '../settings/Edit';
import authService from '../services/auth.service';

export default function Navbar() {
  const currentUser = authService.getCurrentUser();

  const [team, setTeam] = useState({
    currentTeam: '7',
  });

  const { currentTeam } = team;
  localStorage.setItem('currentTeam', JSON.stringify(currentTeam));
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
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <Link to={'/home'} className=" mx-3 navbar-brand">
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
                <li className="nav-item">
                  <Link to={'/news'} id="news" className="nav-link">
                    News
                  </Link>
                </li>
                {currentUser && (
                  <li className="nav-item">
                    <Link to={'/forum'} id="forum" className="nav-link">
                      Forum
                    </Link>
                  </li>
                )}
                {currentUser && (
                    <li className="nav-item">
                      <Link to={'/teams'} id="teams" className="nav-link">
                        Team Information
                      </Link>
                    </li>
                )}

                <li className="nav-item">
                  <Link to={'/schedules'} id="schedules" className="nav-link">
                    Weekly Schedules
                  </Link>
                </li>
              </ul>
              <form className="d-flex my-2 my-lg-0 ms-auto">
                {/* <select name="currentTeam" onChange={(e) => onInputChange(e)}>
                  <option defaultValue="Select Your Favorite Team">
                    Select Your Favorite Team
                  </option>
                  <option value="25">San Fransisco 49ers</option>
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
                </select> */}
              </form>

              <ul className="navbar-nav">
                <li className="nav-item mx-3 dropdown">
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
                          Profile
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
          <Route path="/edit" element={<Edit />} />
          <Route path="/home" element={<HomeDisplay />} />
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<HomeDisplay />} />
          <Route path="/schedules" element={<GameDisplay />} />
          <Route path="/teams" element={<TeamDisplay />} />
          <Route path="/news" element={<NewsDisplay />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
