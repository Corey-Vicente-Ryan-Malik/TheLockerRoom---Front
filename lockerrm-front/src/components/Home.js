import {useNavigate} from "react-router-dom";
import React from "react";
import authService from "../services/auth.service";
function Home () {
    console.log(authService.getCurrentUser())
    return (
        <div className="Home">
            <h1>This is the [ Home page]</h1>
        </div>
    );
}

export default Home ;