import './Edit.css';

function Edit() {
    return (
        <div className="Edit">
            <h1>This is the [ Edit Profile page]</h1>
            <div>
                <form>
                    <label>
                        First Name
                        <input type="text" name="first name"/>
                    </label>

                    <label>
                        Last Name
                        <input type="text" name="last name"/>
                    </label>

                    <label>
                        Email
                        <input type="text" name="email"/>
                    </label>

                    <label>
                        Username
                        <input type="text" name="username"/>
                    </label>

                    <label>
                        Favorite Team
                        <select name="favorite team">
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
                    </label>
                    <p>Enter your password to confirm your changes</p>
                    <label>
                        Password
                        <input type="password" name="password"/>
                    </label>

                    <label>
                        Confirm Password
                        <input type="password" name=" confirm password"/>
                    </label>

                    <button type="sumbit" name="Save changes"/>


                </form>
            </div>

        </div>
    );
}

export default Edit;