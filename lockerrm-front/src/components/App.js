import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Home';
import Scores from './Scores';
import Standings from './Standings';
import Stats from './Stats';
import Forum from './Forum';
import Teams from './Teams';
import Edit from './Edit';
import Login from "./Login";
import Schedules from "./Schedules";
import Landing from "./Landing.js"
import Register from "./Register";
import Settings from "./Settings";




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
