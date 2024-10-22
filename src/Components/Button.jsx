import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, className}) {
  return (
    <button
      className={`px-6 py-2 text-white bg-[#011627ff]  rounded-lg shadow-2xl  hover:text-white transition duration-10 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;
