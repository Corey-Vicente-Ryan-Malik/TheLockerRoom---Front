import PropTypes from 'prop-types'

const Landing = ( props, {} ) => {
    const onClick = (e) => {
        e.preventDefault()
        console.log("Click Check.")
    }

    return (

        <div className="landingPage" style={landingPage}>

            <div className="landingInfo" style={landingInfo}>
                <h1 style={header}>{props.header}</h1>
                <p style={message}>{props.message}</p>
            </div>

            <div className="landingForm" style={landingForm}>
                <input type="text" className="username" placeholder="Username" style={usernameForm}/>

                <input type="password" className="password" placeholder="Password" style={passwordForm}/>

                <button style={loginBtn} onClick={onClick}>Log-In</button>

                <a href="#">Forgot Password?</a>

                <button style={registerBtn} onClick={onClick}>Create New Account?</button>
            </div>

        </div>

    )
}

Landing.defaultProps = {
    header: 'Main Welcome Header...(x)',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et maxime quo voluptas consectetur corporis, mollitia reprehenderit eveniet totam expedita impedit voluptate asperiores accusamus suscipit doloribus fugit deserunt placeat ipsa amet!',
}

Landing.propTypes = {
    message: PropTypes.string.isRequired
}

//Landing Page styling 
const landingPage = {
    display: 'flex',
    margin: 'auto',
    width: '95vw',
    height: '95vh',
}

//Landing Info styling
const landingInfo = {
    display: 'grid',
    margin: 'auto',
    border: 'solid black',
    borderRadius: '15px',
    width: '40%',
    height: '60%'
}
const header = {
    gridColumn: 1,
    gridRow: 1,
    margin: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
}
const message = {
    gridColumn: 1,
    gridRow: 2,
    margin: 'auto',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
}

//Landing Form styling
const landingForm = { 
    display: 'grid',
    margin: 'auto',
    border: 'solid black',
    borderRadius: '15px',
    width: '40%',
    height: '60%',
}
const usernameForm = {
    gridColumn: 1,
    gridRow: 1,
    margin: 'auto',
    width: '85%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    borderRadius: '10px',
}
const passwordForm = {
    gridColumn: 1,
    gridRow: 2,
    margin: 'auto',
    width: '85%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    borderRadius: '10px'
}
const loginBtn = {
    gridColumn: 1,
    gridRow: 3,
    margin: 'auto',
    width: '85%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: '10px'
}
const registerBtn = {
    gridColumn: 1,
    gridRow: 4,
    margin: 'auto',
    width: '50%',
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: '10px'
}

export default Landing