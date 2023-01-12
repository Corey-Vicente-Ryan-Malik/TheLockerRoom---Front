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
              <form className="d-flex my-2 my-lg-0 ms-auto"></form>
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
