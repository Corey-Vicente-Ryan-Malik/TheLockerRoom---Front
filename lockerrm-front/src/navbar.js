import logo from './logo.svg';
import './navbar.css';

function navbar() {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">The Locker Room</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" id="scores" href="#">Scores <span className="sr-only"></span></a>
                        </li>

                        <!--      start of nav item-->
                        <li className="nav-item">
                            <a className="nav-link" id="standings" href="#">Standings</a>
                        </li>
                        <!--end of nav item-->
                        <li className="nav-item">
                            <a className="nav-link" id="stats" href="#">Stats</a>
                        </li>
                        <!--      start of nav item-->
                        <li className="nav-item">
                            <a className="nav-link" id="forum" href="">Forum</a>
                        </li>
                        <!--      end of nav item-->
                        <li className="nav-item">
                            <a className="nav-link" id="teams" href="">Teams</a>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0 ms-auto">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <!--      start of dropdown-->
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Settings
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#"> Edit Profile</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li><a className="dropdown-item" href="#">Log in</a></li>
                            </ul>
                        </li>
                    </ul>
                    <!--end of dropdown-->
                </div>
            </nav>
        </div>
    );
}

export default navbar;
