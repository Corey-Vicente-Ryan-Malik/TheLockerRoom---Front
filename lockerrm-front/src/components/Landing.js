
import '../index.css';
import { Component} from "react";
import AuthService from "../services/auth.service";
import {withRouter} from "../Common/router";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = value => {
    if(!value){
        return(
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};


class Login extends Component{
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message:""
        };
    }
    onChangeUsername (e){
        this.setState({
            username: e.target.value
        });
    }
    onChangePassword (e){
        this.setState({
            password: e.target.value
        });
    }
    handleLogin (e){
        e.preventDefault()
        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.router.navigate("/profile");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        }else {
            this.setState({
                loading: false
            });
        }
    }
    render() {
        return(
            <div className="col-md-12">
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />

                    <Form
                        onSubmit={this.handleLogin}
                        ref={c => {
                            this.form = c;
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Input
                                type="text"
                                className="form-control"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <button
                                className="btn btn-primary btn-block"
                                disabled={this.state.loading}
                            >
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>
                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>


        );

    }
}

export default withRouter(Login);

// const Landing = ( props, {} ) => {
//     const navigate = useNavigate();
//     const onClick = (e) => {
//         e.preventDefault();
//         navigate('/register');
//         console.log("Click Check.");
//
//     }
//     const {setAuth} = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = useRef();
//     const [errMsg, setErrMsg] = useState('')
//     const [success, setSuccess] = useState(false)
//     useEffect(() =>{
//         userRef.current.focus();
//     },[])
//
//
//     const [user, setUser] = useState({
//         username: "",
//         password: "",
//         grant_type: 'password'
//     });
//     const {username, password} = user;
//     const onInputChange = (e) => {
//         setUser({...user, [e.target.name]: e.target.value});
//     }
//
//     async function sendLoginRequest() {
//
//         console.log("sending request")
//         console.log(user)
//
//         // const [jwt, setJwt] = useLocateState("", jwt);
//         try{
//             await fetch("http://localhost:8080/oauth/token", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                     'Authorization': 'Basic ' + btoa('sports-app-client:secret'),
//                 },
//                 body: `grant_type=${user.grant_type}&username=${user.username}&password=${user.password}&client_id=sports-app-client`
//             }).then(data => data.json())
//                 .then(data => {
//                     console.log(data);
//                     setAuth({data})
//                         if (data.access_token) {
//                         console.log("storing token...")
//                         // localStorage.setItem('access_token', data.access_token);
//                             setSuccess(true);
//                     }
//                     if (data.refresh_token) {
//                         // localStorage.setItem("refresh_token", data.refresh_token);
//                         console.log("Refresh token set")
//                     }
//
//                 })
//         }catch(error){
//             if(error.response?.status === 400){
//                 setErrMsg('Missing username or password');
//             }else if(error.status === 401){
//                 setErrMsg("Unauthorized")
//             }else{
//                 setErrMsg("Login failed")
//             }
//
//         }
//
//
//     }


    // <div className="landingPage" >
    //     <div className="landingInfo" style={landingInfo}>
    //         <img className="landLogo" style={landLogo} src={logo}/>
    //         <p className="message" style={message}>{props.message}</p>
    //     </div>
    //     <div className="landingForm">
    //         <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    //         {/*<label htmlFor="username">Username</label>*/}
    //         <input type="text"
    //                className="username"
    //                value={username}
    //                name="username"
    //                placeholder="Username"
    //                style={usernameForm}
    //                onChange={(e)=>onInputChange(e)}
    //                ref={userRef}
    //                required/>
    //
    //         {/*<label htmlFor="password">Password</label>*/}
    //         <input type="password"
    //                className="password"
    //                value={password}
    //                name="password"
    //                placeholder="Password"
    //                style={passwordForm}
    //                onChange={(e)=>onInputChange(e)}
    //                ref={userRef}
    //                required/>
    //
    //         <button style={loginBtn} type="button" onClick={(e)=>sendLoginRequest()}>Log-In</button>
    //
    //         <a href="#" style={forgotPassword}>Forgot Password?</a>
    //
    //         <button className="registerBtn" style={registerBtn} onClick={onClick}>Create New Account?</button>
    //     </div>
    // </div>


// }

// Landing.defaultProps = {
//     message: 'Welcome to the Locker room ! Where you can access all of the latest news, scores , stats,  and more all from your personal device ! Please log in to get the scoop on your favorite teams.'
// }
//
// Landing.propTypes = {
//     message: PropTypes.string.isRequired
// }
//
// //Landing Page styling
// // const landingPage = {
// //     display: 'flex',
// //     margin: 'auto',
// //     width: '95vw',
// //     height: '95vh',
// // }
//
// //Landing Info styling
// const landingInfo = {
//     display: 'grid',
//     margin: 'auto',
//     // border: 'solid black',
//     // borderRadius: '15px',
//     width: '40%',
//     height: '90%'
// }
// const landLogo = {
//     gridColumn: 1,
//     gridRow: 1,
//     margin: '0 auto',
//     width: '85%',
//     height: '80%',
//     // display: 'flex',
//     justifyContent: 'center',
//     justifyItems: 'center',
//     alignItems: 'center',
// }
// const message = {
//     gridColumn: 1,
//     gridRow: 2,
//     margin: '0 auto',
//     width: '85%',
//     height: '50%',
//     // display: 'flex',
//     justifyContent: 'center',
//     justifyItems: 'center',
//     alignItems: 'center',
// }
//
// //Landing Form styling
// const landingForm = {
//     display: 'grid',
//     margin: 'auto',
//     border: 'solid black',
//     borderRadius: '15px',
//     width: '40%',
//     height: '60%',
// }
// const usernameForm = {
//     gridColumn: 1,
//     gridRow: 1,
//     margin: 'auto',
//     width: '85%',
//     height: '50%',
//     display: 'flex',
//     justifyContent: 'center',
//     justifyItems: 'center',
//     borderRadius: '10px',
// }
// const passwordForm = {
//     gridColumn: 1,
//     gridRow: 2,
//     margin: 'auto',
//     width: '85%',
//     height: '50%',
//     display: 'flex',
//     justifyContent: 'center',
//     justifyItems: 'center',
//     borderRadius: '10px'
// }
// const loginBtn = {
//     gridColumn: 1,
//     gridRow: 3,
//     margin: 'auto',
//     width: '85%',
//     height: '50%',
//     display: 'flex',
//     justifyContent: 'center',
//     justifyItems: 'center',
//     alignItems: 'center',
//     borderRadius: '10px'
// }
// const registerBtn = {
//     gridColumn: 1,
//     gridRow: 4,
//     margin: 'auto',
//     // width: '50%',
//     // height: '50%',
//     display: 'flex',
//     justifyContent: 'center',
//     justifyItems: 'center',
//     alignItems: 'center',
//     borderRadius: '10px'
// }
// const forgotPassword = {
//     gridColumn: 1,
//     gridRow: 5,
//     margin: 'auto',
//     width: '50%',
//     height: '50%',
//     display: 'flex',
//     justifyContent: 'center',
//     justifyItems: 'center',
//     alignItems: 'center',
// }
//
// export default Landing;