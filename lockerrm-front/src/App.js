import Navbar from "./components/Navbar";
import React, {Component, useState} from 'react';
import Home from './components/Home';
import Scores from './components/Scores';
import Standings from './components/Standings';
import Stats from './components/Stats';
import Forum from './components/forum/Forum';
import Teams from './components/Teams';
import Edit from './components/Edit';
import Login from "./components/Login";
import Schedules from "./components/Schedules";
import Landing from "./components/Landing"
import Register from "./components/Register";
import Settings from "./components/Settings";
import Schedule from './components/Schedules';
import Footer from "./components/Footer";
import About from "./components/About";
import WeeklySchedule from "./components/WeeklySchedule";
import Data from "./components/Data";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import AuthService from "./services/auth.service";
import CreatePost from "./components/forum/CreatePost";


class App extends Component{
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showUserContent: false,
            showForum: false,
            currentUser: undefined

        };
    }
    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if(user){
            this.setState({
                currentUser: AuthService.getCurrentUser(),
                // add roles to user
                showUserContent: user.roles.includes("user"),
                showForum: user.roles.includes("user")
            })
        }
    }
    logOut(){
        AuthService.logout();
    }
    render(){
        const {currentUser, showUserContent, showForum  } = this.state;
        return(
            <div className="App">
                <Router>
                    <div className="Navbar">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
                            <Link to={"/home"} className="navbar-brand">
                                The Locker Room
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link to={"/scores"} className="nav-link" id="scores"><span className="sr-only"></span>
                                            Scores
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to={"/standings"}  id="standings" className="nav-link">
                                            Standings
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to={"/stats"}  id="stats" className="nav-link">
                                            Stats
                                        </Link>
                                    </li>
                                    {currentUser && (
                                        <li className="nav-item">
                                            <Link to={"/forum"} id="forum" className="nav-link">
                                                Forum
                                            </Link>
                                        </li>
                                    )}

                                    <li className="nav-item">
                                        <Link to={"/teams"} id="teams" className="nav-link">
                                            Teams
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/schedules"} id="schedules" className="nav-link">
                                            Schedules
                                        </Link>
                                    </li>
                                </ul>
                                <form className="d-flex my-2 my-lg-0 ms-auto">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>

                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <Link to={"/lockerrm-front/src/components/Navbar#"} id="navbarDropdownMenuLink" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa-solid fa-user-gear"></i>
                                        </Link>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                            {currentUser &&(
                                                <li>
                                                    <Link to={"/edit"} id="edit" className="dropdown-item">
                                                        Edit Profile
                                                    </Link>
                                                </li>
                                            )}
                                            {currentUser&&(
                                                <li>
                                                    <Link to={"/Settings"} id="settings" className="dropdown-item">
                                                        Settings
                                                    </Link>
                                                </li>
                                            )}
                                            {currentUser&&(
                                                <li>
                                                    <Link to={"/"} className="dropdown-item">
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
                        <Route path='/home'
                               element={<Home/>}/>
                        <Route path='/scores'
                               element={<Scores/>}/>
                        <Route path='/standings'
                               element={<Standings/>}/>
                        <Route path='/stats'
                               element={<Stats/>}/>
                        <Route path='/forum'
                               element={<Forum/>}/>
                        <Route path='/teams'
                               element={<Teams/>}/>
                        <Route path='/edit'
                               element={<Edit/>}/>
                        <Route path='/login'
                               element={<Login/>}/>
                        <Route path='/schedules'
                               element={<Schedules/>}/>
                        <Route path='/register'
                               element={<Register/>}/>
                        <Route path='/settings'
                               element={<Settings/>}/>
                        <Route path='/about'
                               element={<About/>}/>
                    </Routes>
                    
                    <Routes>
                        <Route path='/' element={<Landing/>}/>
                        <Route path='/sched' element={<Schedule/>}/>
                        <Route path='/schedule' element={<WeeklySchedule/>}/>
                        <Route path='/data' element={<Data/>}/>
                        <Route path='/create-post' element={<CreatePost/>} />
                    </Routes>
                    <Footer/>
                </Router>
            </div>
        );
    }
}

export default App;
