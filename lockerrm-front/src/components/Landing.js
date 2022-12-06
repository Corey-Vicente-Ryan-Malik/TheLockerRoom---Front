import PropTypes from 'prop-types'
import Button from './Button'

const Landing = ( props, {} ) => {
    const onClick = (e) => {
        e.preventDefault()
        console.log("Click Check.")
    }

    return (
        <div className="landing">
            <form action="#">

                <div className="loginForm" style={loginStyle}>
                    <input type="text" className="username" placeholder="Username"/>
                    <label htmlFor="username"></label>

                    <input type="password" className="password" placeholder="Password"/>
                    <label htmlFor="password"></label>

                    <Button text="Log-In" onClick={onClick} />
                    <Button text="Create New Account" onClick={onClick} />
                </div>

            </form>
        </div>
    )
}

Landing.defaultProps = {
    message: 'Main Welcome message...(x)'
}

Landing.propTypes = {
    message: PropTypes.string.isRequired
}

const loginStyle = {
    margin: 'auto',
    backgroundColor: 'inherit',
    width: '50vw',
    height: '50vh',
    display: 'flex',
}

export default Landing