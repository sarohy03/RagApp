import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, className}) {
  return (
    <button
      className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  px-6 py-2 text-white bg-[#011627ff]  rounded-lg shadow-2xl  hover:text-white transition duration-10 ${className}`}
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
