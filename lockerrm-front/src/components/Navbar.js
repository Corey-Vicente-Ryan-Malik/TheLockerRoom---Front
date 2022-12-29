import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GameDisplay from '../displayFolder/GameDisplay';
import TeamDisplay from '../displayFolder/TeamDisplay';
import Landing from '../displayFolder/LandingDisplay';
import NewsDisplay from '../displayFolder/NewsDisplay';
import Register from '../settings/Register';
import CreatePost from '../forum/CreatePost';
import Forum from '../forum/Forum';

export default function Navbar() {
  const { currentUser, showUserContent, showForum } = useState({});
  return (
    // return (
    //   <React.Fragment>
    //      constructor(props) {
    //       super(props);
    //       this.logOut = this.logOut.bind(this);

    //       this.state = {
    //           showUserContent: false,
    //           showForum: false,
    //           currentUser: undefined

    //       };
    //   }
    //   componentDidMount() {
    //       const user = AuthService.getCurrentUser();

    //       if(user){
    //           this.setState({
    //               currentUser: AuthService.getCurrentUser(),
    //               // add roles to user
    //               showUserContent: user.roles.includes("user"),
    //               showForum: user.roles.includes("user")
    //           })
    //       }
    //   }
    //   logOut(){
    //       AuthService.logout();
    //   }
    //   render(){
    //       const {currentUser, showUserContent, showForum  } = this.state;
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
                <li className="nav-item active">
                  <Link to={'/scores'} className="nav-link" id="scores">
                    <span className="sr-only"></span>
                    Scores
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={'/standings'} id="standings" className="nav-link">
                    Standings
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={'/stats'} id="stats" className="nav-link">
                    Stats
                  </Link>
                </li>
                {currentUser && (
                  <li className="nav-item">
                    <Link to={'/forum'} id="forum" className="nav-link">
                      Forum
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  <Link to={'/teams'} id="teams" className="nav-link">
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/schedules'} id="schedules" className="nav-link">
                    Schedules
                  </Link>
                </li>
              </ul>
              <form className="d-flex my-2 my-lg-0 ms-auto">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>

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
                    {currentUser && (
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
          <Route path="/" element={<Landing />} />
          <Route path="/schedules" element={<GameDisplay />} />
          <Route path="/teams" element={<TeamDisplay />} />
          <Route path="/news" element={<NewsDisplay />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
