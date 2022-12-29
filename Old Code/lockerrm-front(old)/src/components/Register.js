import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function Register () {
    let navigate = useNavigate;
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        favoriteTeam: "",
    });

    const {firstname, lastname, email, username, password, favoriteTeam} = user;
    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    const onSubmit = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8080/register", user);
        navigate("/home")

    };
    return (
        <div className="RegisterPage">
            <div className="Edit form" style={RegisterForm}>
                <form onSubmit={(e)=>onSubmit(e)}>

                    <input style={firstName} type="text" placeholder="First Name" name="firstname" value={firstname} onChange={(e)=>onInputChange(e)}/>


                    <input style={lastName} type="text" placeholder=" Last Name" name="lastname" value={lastname} onChange={(e)=>onInputChange(e)}/>


                    <input style={Email} type="text" placeholder="Email" name="email" value={email} onChange={(e)=>onInputChange(e)}/>


                    <input style={Username} type="text" placeholder="Username" name="username" value={username} onChange={(e)=>onInputChange(e)}/>

                    <select name="favorite team" style={FavoriteTeam} value={favoriteTeam} onChange={(e)=>onInputChange(e)}>
                        <option defaultValue="Select Your Favorite Team">Select Your Favorite Team</option>
                        <option value="San Fransisco 49ers">San Fransisco 49ers</option>
                        <option value="Chicago Bears">Chicago Bears</option>
                        <option value="Cincinnati Bengals">Cincinnati Bengals</option>
                        <option value="Buffalo Bills">Buffalo Bills</option>
                        <option value="Denver Broncos">Denver Broncos</option>
                        <option value="Cleveland Browns">Cleveland Browns</option>
                        <option value="Tampa Bay Buccaneers">Tampa Bay Buccaneers</option>
                        <option value="Arizona Cardinals">Arizona Cardinals</option>
                        <option value="Los Angeles Chargers">Los Angeles Chargers</option>
                        <option value="Kansas City Chiefs">Kansas City Chiefs</option>
                        <option value="Indianapolis Colts">Indianapolis Colts</option>
                        <option value="Washington Commanders">Washington Commanders</option>
                        <option value="Dallas Cowboys">Dallas Cowboys</option>
                        <option value="Miami Dolphins">Miami Dolphins</option>
                        <option value="Philadelphia Eagles">Philadelphia Eagles</option>
                        <option value="Atlanta Falcons">Atlanta Falcons</option>
                        <option value="New York Giants">New York Giants</option>
                        <option value="Jacksonville Jaguars">Jacksonville Jaguars</option>
                        <option value="New York Jets">New York Jets</option>
                        <option value="Detroit Lions">Detroit Lions</option>
                        <option value="Green Bay Packers">Green Bay Packers</option>
                        <option value="Carolina Panthers">Carolina Panthers</option>
                        <option value="New England Patriots">New England Patriots</option>
                        <option value="Las Vegas Raiders">Las Vegas Raiders</option>
                        <option value="Los Angeles Rams">Los Angeles Rams</option>
                        <option value="Baltimore ravens">Baltimore Ravens</option>
                        <option value="New Orleans Saints">New Orleans Saints</option>
                        <option value="Seattle Seahawks">Seattle Seahawks</option>
                        <option value="Pittsburgh Steelers"> Pittsburgh Steelers</option>
                        <option value="Houston Texans">Houston Texans</option>
                        <option value="Tennessee Titans">Tennessee Titans</option>
                        <option value="Minnesota Vikings">Minnesota Vikings</option>
                    </select>

                    <input style={Password} placeholder=" Enter Password" type="password" name="password" value={password} onChange={(e)=>onInputChange(e)}/>


                    <input style={ConfirmPass} placeholder=" Re-enter Password" type="password" name=" confirm password"/>

                    <button style={SaveButton} type="sumbit" name="Create User">Create User</button>


                </form>
            </div>

        </div>
    );
}

const RegisterPage = {
    display: 'flex',
    margin: '50px auto',
    width: '95vw',
    height: '95vh',
}

const RegisterForm = {
    display: 'grid',
    margin: 'auto',
    border: 'solid black',
    borderRadius: '15px',
    width: '60%',
    height: '60%',
}

const firstName = {
    gridColumn: 1,
    gridRow: 1,
    margin: '10px auto',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '5px',
    borderRadius: '10px',
}

const lastName = {
    gridColumn: 1,
    gridRow: 2,
    margin: '10px auto',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '5px',
    borderRadius: '10px',

}

const Email = {
    gridColumn: 1,
    gridRow: 3,
    margin: '10px auto',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '5px',
    borderRadius: '10px',
}

const Username = {
    gridColumn: 1,
    gridRow: 4,
    margin: '10px auto',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    padding:'5px',
    borderRadius: '10px',
}

const FavoriteTeam = {
    gridColumn: 1,
    gridRow: 5,
    margin: '10px auto',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    padding:'5px',
    borderRadius: '10px',
}

const Password = {
    gridColumn: 1,
    gridRow: 6,
    margin: '10px auto',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '5px',
    borderRadius: '10px',
}

const ConfirmPass = {
    gridColumn: 1,
    gridRow: 7,
    margin: '10px auto',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '5px',
    border: 'solid black',
    borderRadius: '15px',
}

const SaveButton = {
    gridColumn: 1,
    gridRow: 8,
    margin: '10px auto',
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    padding: '5px',
    borderRadius: '10px',
}

export default Register ;