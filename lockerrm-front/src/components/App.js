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
                </Routes>
                <Routes>
                    <Route exact path='/'
                           exact element={<Landing/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
