import React from "react";
import authService from "../services/auth.service";
function Edit() {
  const currentUser = authService.getCurrentUser();
  return (
    <div className="Edit" style={EditPage}>
      <div className="Edit form" style={EditForm}>
        <form className="editForm">
          <input
            style={firstName}
            type="text"
            placeholder="First Name"
            name="firstName"
            value={currentUser["firstName"]}
          />

          <input
            style={lastName}
            type="text"
            placeholder=" Last Name"
            name="lastName"
            value={currentUser["lastName"]}
          />

          <input style={Email} type="text" placeholder="Email" name="email" value={currentUser["email"]}/>

          <input
            style={Username}
            type="text"
            placeholder="Username"
            name="username"
            value={currentUser["username"]}
          />

          <select name="favorite team" style={FavoriteTeam} value={currentUser["favTeam"]}>
            <option defaultValue="Select Your Favorite Team">
              Select Your Favorite Team
            </option>
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

          <p style={Passmessage}>Enter your password to confirm your changes</p>

          <input
            style={Password}
            placeholder="Password"
            type="password"
            name="password"

          />

          <input
            style={ConfirmPass}
            placeholder=" Confirm Password"
            type="password"
            name=" confirm password"
          />

          <button style={SaveButton} type="sumbit" name="Save changes">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

const EditPage = {
  display: 'flex',
  margin: 'auto',
  width: '95vw',
  height: '95vh',
};

const firstName = {
  gridColumn: 1,
  gridRow: 1,
  margin: '10px',
  width: '90%',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '5px',
  borderRadius: '10px',
};

const lastName = {
  gridColumn: 1,
  gridRow: 2,
  margin: '10px',
  width: '90%',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '5px',
  borderRadius: '10px',
};

const Email = {
  gridColumn: 1,
  gridRow: 3,
  margin: '10px',
  width: '90%',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '5px',
  borderRadius: '10px',
};

const Username = {
  gridColumn: 1,
  gridRow: 4,
  margin: '10px',
  width: '90%',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '5px',
  borderRadius: '10px',
};

const FavoriteTeam = {
  gridColumn: 1,
  gridRow: 5,
  margin: '10px',
  width: '90%',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '5px',
  borderRadius: '10px',
};

const Passmessage = {
  gridColumn: 1,
  gridRow: 6,
  margin: '10px',
};

const Password = {
  gridColumn: 1,
  gridRow: 7,
  margin: '10px',
  width: '90%',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '5px',
  borderRadius: '10px',
};

const ConfirmPass = {
  gridColumn: 1,
  gridRow: 8,
  margin: '10px',
  width: '90%',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '5px',
  border: 'solid black',
  borderRadius: '15px',
};

const SaveButton = {
  gridColumn: 1,
  gridRow: 9,
  margin: '10px',
  width: '60%',
  display: 'flex',
  justifyContent: 'center',
  justifyItems: 'center',
  alignItems: 'center',
  padding: '5px',
  borderRadius: '10px',
};

const EditForm = {
  display: 'grid',
  margin: 'auto',
  border: 'solid black',
  borderRadius: '15px',
  // width: '60%',
  // height: '70%',
};

const message = {};

const select = {};

export default Edit;
