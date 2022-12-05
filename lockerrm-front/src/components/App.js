import './App.css';
import Navbar from "./Navbar";git
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Home';
import Scores from './Scores';
import Standings from './Standings';
import Stats from './Stats';
import Forum from './Forum';
import Teams from './Teams';


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
                </Routes>
            </Router>
        </div>
    );
}

export default App;
