import AuthContext from "../context/AuthProvider";
import authProvider from "../context/AuthProvider";
import {useContext} from "react";

function  Scores () {
    const {data}  = useContext(AuthContext)
    return (
        <div className="Scores">
            <h1>{data}</h1>
        </div>
    );
}

export default Scores ;