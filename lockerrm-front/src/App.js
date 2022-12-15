import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home';
import Scores from './components/Scores';
import Standings from './components/Standings';
import Stats from './components/Stats';
import Forum from './components/Forum';
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
import GameSched from "./components/GameSched";


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path='/home'
                           exact element={<Home/>}/>
                    <Route exact path='/scores'
                           exact element={<Scores/>}/>
                    <Route exact path='/standings'
                           exact element={<Standings/>}/>
                    <Route exact path='/stats'
                           exact element={<Stats/>}/>
                    <Route exact path='/forum'
                           exact element={<Forum/>}/>
                    <Route exact path='/teams'
                           exact element={<Teams/>}/>
                    <Route exact path='/edit'
                           exact element={<Edit/>}/>
                    <Route exact path='/login'
                           exact element={<Login/>}/>
                    <Route exact path='/schedules'
                           exact element={<Schedules/>}/>
                    <Route exact path='/register'
                           exact element={<Register/>}/>
                    <Route exact path='/settings'
                           exact element={<Settings/>}/>
                    <Route exact path='/about'
                           exact element={<About/>}/>
                </Routes>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/sched' element={<Schedule/>}/>
                    <Route path='/schedule' element={<GameSched/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );


}

export default App;
