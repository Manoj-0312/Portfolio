import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

function Button(props) {
  return (
    <div>
      <button>
            <i className={`bx ${props.icons}`}></i> {props.text}
          </button>
    </div>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
Button.defaultProps = {
    text: 'Click Me',
    icons: 'send',
  };

export default Button

