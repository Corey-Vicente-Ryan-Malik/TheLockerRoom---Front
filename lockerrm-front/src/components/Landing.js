import PropTypes from 'prop-types'
import Button from './Button'

const Landing = (props) => {
    const onClick = () => {
        console.log("Click Check.")
    }

    return (
        <div className="landing">
            <h1>{props.message}</h1>

            <Button text="Log-In" onClick={onClick} />
            <Button text="Register New Account" onClick={onClick} />
        </div>
    )
}

Landing.defaultProps = {
    message: 'Welcome to The Locker Room!'
}

Landing.propTypes = {
    message: PropTypes.string.isRequired
}

export default Landing