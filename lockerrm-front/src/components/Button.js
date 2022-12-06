import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={btnStyle}
            className="btn">{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
}

const btnStyle = {
    backgroundColor: 'lightBlue',
    color: 'black',
    border: '1px solid black',
    borderRadius: '5%',
}

export default Button