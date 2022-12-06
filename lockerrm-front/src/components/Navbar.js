import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/home">The Locker Room</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" id="scores" href="/scores">Scores <span className="sr-only"></span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="standings" href="/standings">Standings</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="stats" href="/stats">Stats</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="forum" href="/forum">Forum</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="teams" href="/teams">Teams</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" id="schedules" href="/schedules">Schedules</a>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0 ms-auto">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>

                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="lockerrm-front/src/components/Navbar#" id="navbarDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fa-solid fa-user-gear"></i>
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="/edit"> Edit Profile</a></li>
                                <li><a className="dropdown-item" href="lockerrm-front/src/components/Navbar#">Settings</a></li>
                                <li><a className="dropdown-item" href="/login">Log in</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;
