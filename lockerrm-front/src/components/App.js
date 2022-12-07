import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import React, { useState } from 'react';
import Home from './Home';
import Scores from './Scores';
import Standings from './Standings';
import Stats from './Stats';
import Forum from './Forum';
import Teams from './Teams';
import Edit from './Edit';
import Login from "./Login";
import Schedules from "./Schedules";
import Landing from './Landing';
import Schedule from './Schedule';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes>
                    {/*<Route exact path='/'*/}
                    {/*       exact element={<Landing/>}/>*/}
                    
                    <Route path='/home' element={<Home/>}/>

                    <Route path='/scores' element={<Scores/>}/>

                    <Route path='/standings' element={<Standings/>}/>

                    <Route path='/stats' element={<Stats/>}/>

                    <Route path='/forum' element={<Forum/>}/>

                    <Route path='/teams' element={<Teams/>}/>

                    <Route path='/edit' element={<Edit/>}/>

                    <Route path='/login' element={<Login/>}/>

                    <Route path='/schedules' element={<Schedules/>}/>

                </Routes>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/sched' element={<Schedule/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
