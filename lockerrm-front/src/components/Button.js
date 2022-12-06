import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'inherit',
                border: 'none',
                textDecoration: 'underline',
                cursor: 'pointer',
                fontSize: '2em',
            }}
            className="btn">{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button